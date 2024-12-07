import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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
    const { state } = useLocation();

    // Função para carregar os dados do produto
    const carregarProduto = (produtoId) => {
        axios.get(`http://localhost:8080/api/produtos/${produtoId}`)
            .then((response) => {
                setProduto(response.data);
                setIdCategoria(response.data.categoria?.id || null);
            })
            .catch((error) => {
                console.error("Erro ao carregar produto: ", error);
                setErro("Erro ao carregar produto.");
            });
    };

    // Carregar produto ao montar o componente ou se o `id` mudar
    useEffect(() => {
        if (id) {
            carregarProduto(id);
        } else if (state?.id) {
            carregarProduto(state.id);
        }
    }, [id, state]);

    // Carregar lista de categorias
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

    // Manipulador de mudanças nos campos do formulário
    const handleChange = (e) => {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value
        });
    };

    // Envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!produto.codigo ||
            !produto.titulo ||
            !produto.valorUnitario ||
            !produto.tempoEntregaMinimo ||
            !produto.tempoEntregaMaximo ||
            !idCategoria) {
            setErro("Todos os campos devem ser preenchidos.");
            return;
        }

        const produtoData = { ...produto, categoria: { id: idCategoria } };

        if (id || state?.id) {
            axios.put(`http://localhost:8080/api/produtos/${id || state.id}`, produtoData)
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
                    <h2>{id || state?.id ? 'Editar Produto' : 'Novo Produto'}</h2>
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
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Descrição</label>
                            <Input
                                type="text"
                                name="descricao"
                                value={produto.descricao}
                                onChange={handleChange}
                                placeholder="Descrição do produto"
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Valor Unitário</label>
                            <Input
                                type="number"
                                name="valorUnitario"
                                value={produto.valorUnitario}
                                onChange={handleChange}
                                placeholder="Valor unitário"
                                required
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Tempo de Entrega Mínimo (dias)</label>
                            <Input
                                type="number"
                                name="tempoEntregaMinimo"
                                value={produto.tempoEntregaMinimo}
                                onChange={handleChange}
                                placeholder="Tempo de entrega mínimo"
                                required
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Tempo de Entrega Máximo (dias)</label>
                            <Input
                                type="number"
                                name="tempoEntregaMaximo"
                                value={produto.tempoEntregaMaximo}
                                onChange={handleChange}
                                placeholder="Tempo de entrega máximo"
                                required
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Categoria</label>
                            <Form.Select
                                required
                                fluid
                                placeholder="Selecione"
                                options={listaCategoria}
                                value={idCategoria}
                                onChange={(e, { value }) => setIdCategoria(value)}
                            />
                        </Form.Field>

                        <Button
                            type="submit"
                            color="orange"
                            icon="save"
                            content="Salvar"
                        />
                        <Button
                            as={Link}
                            to="/list-produto"
                            color="red"
                            icon="arrow left"
                            content="Voltar"
                        />
                    </Form>
                </Container>
            </div>
        </div>
    );
}
