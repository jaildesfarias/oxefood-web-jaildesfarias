import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Input, Message } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link } from 'react-router-dom';

export default function FormProduto() {
    const [produto, setProduto] = useState({
        codigo: '',
        titulo: '',
        descricao: '',
        valorUnitario: '',
        tempoEntregaMinimo: '',
        tempoEntregaMaximo: ''
    });

    const [listaCategoria, setListaCategoria] = useState([]);
    const [idCategoria, setIdCategoria] = useState(null);
    const [erro, setErro] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    // Buscar produto para edição
    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/produtos/${id}`)
                .then((response) => {
                    setProduto(response.data);
                    setIdCategoria(response.data.categoria.id); // Assume que o backend retorna a categoria
                })
                .catch((error) => {
                    console.error("Erro ao carregar produto: ", error);
                    setErro("Erro ao carregar produto.");
                });
        }
    }, [id]);

    // Buscar lista de categorias
    useEffect(() => {
        axios.get('http://localhost:8080/api/categoria')
            .then((response) => {
                const categorias = response.data.map((categoria) => ({
                    key: categoria.id,
                    value: categoria.id,
                    text: categoria.descricao
                }));
                setListaCategoria(categorias);
            })
            .catch((error) => {
                console.error("Erro ao carregar categorias: ", error);
                setErro("Erro ao carregar categorias.");
            });
    }, []);

    const handleChange = (e) => {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!produto.codigo || !produto.titulo || !produto.valorUnitario || !produto.tempoEntregaMinimo || !produto.tempoEntregaMaximo || !idCategoria) {
            setErro("Todos os campos devem ser preenchidos.");
            return;
        }

        const produtoData = { ...produto, categoria: { id: idCategoria } };

        if (id) {
            axios.put(`http://localhost:8080/api/produtos/${id}`, produtoData)
                .then(() => {
                    alert("Produto atualizado com sucesso!");
                    navigate('/list-produto');
                })
                .catch((error) => {
                    console.error("Erro ao atualizar produto: ", error);
                    setErro("Erro ao atualizar produto. Tente novamente.");
                });
        } else {
            axios.post('http://localhost:8080/api/produtos', produtoData)
                .then(() => {
                    alert("Produto cadastrado com sucesso!");
                    navigate('/list-produto');
                })
                .catch((error) => {
                    console.error("Erro ao cadastrar produto: ", error);
                    setErro("Erro ao cadastrar produto. Tente novamente.");
                });
        }
    };

    return (
        <div>
            <MenuSistema tela={'produto'} />
            <div style={{ marginTop: '3%' }}>
                <Container textAlign='justified'>
                    <h2>{id ? 'Editar Produto' : 'Novo Produto'}</h2>
                    <Divider />

                    {erro && <Message negative>{erro}</Message>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Código</label>
                            <Input
                                type="text"
                                name="codigo"
                                value={produto.codigo}
                                onChange={handleChange}
                                placeholder="Código do produto"
                                required
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Título</label>
                            <Input
                                type="text"
                                name="titulo"
                                value={produto.titulo}
                                onChange={handleChange}
                                placeholder="Título do produto"
                                required
                  
