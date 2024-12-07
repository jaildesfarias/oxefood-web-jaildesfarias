import React, { useEffect, useState } from "react";
import { Button, Container, Divider, Form, Input, Message } from 'semantic-ui-react';
import axios from 'axios';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MenuSistema from '../../MenuSistema';

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

    // Carregar categorias
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

    // Função para carregar dados de um produto
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

    useEffect(() => {
        if (id) {
            carregarProduto(id);
        } else if (state?.id) {
            carregarProduto(state.id);
        }
    }, [id, state]);

    // Função para salvar produto
    const salvarProduto = () => {
        if (!produto.codigo || !produto.titulo || !produto.valorUnitario || 
            !produto.tempoEntregaMinimo || !produto.tempoEntregaMaximo || !idCategoria) {
            setErro("Todos os campos devem ser preenchidos.");
            return;
        }

        const produtoRequest = { ...produto, categoria: { id: idCategoria } };

        if (id || state?.id) { // Alteração:
            axios.put(`http://localhost:8080/api/produtos/${id || state.id}`, produtoRequest)
                .then(() => {
                    alert("Produto atualizado com sucesso!");
                    navigate('/list-produto');
                })
                .catch((error) => {
                    console.error("Erro ao atualizar produto: ", error);
                    setErro("Erro ao atualizar produto. Tente novamente.");
                });
        } else { // Cadastro:
            axios.post('http://localhost:8080/api/produtos', produtoRequest)
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
        <Container>
            <h2>{id || state?.id ? 'Editar Produto' : 'Novo Produto'}</h2>
            {erro && <Message negative>{erro}</Message>}

            <Form onSubmit={salvarProduto}>
                <Form.Field>
                    <label>Código</label>
                    <Input
                        type="text"
                        name="codigo"
                        value={produto.codigo}
                        onChange={(e) => setProduto({ ...produto, codigo: e.target.value })}
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
                        onChange={(e) => setProduto({ ...produto, titulo: e.target.value })}
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
                        onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}
                        placeholder="Descrição do produto"
                    />
                </Form.Field>

                <Form.Field>
                    <label>Valor Unitário</label>
                    <Input
                        type="number"
                        name="valorUnitario"
                        value={produto.valorUnitario}
                        onChange={(e) => setProduto({ ...produto, valorUnitario: e.target.value })}
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
                        onChange={(e) => setProduto({ ...produto, tempoEntregaMinimo: e.target.value })}
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
                        onChange={(e) => setProduto({ ...produto, tempoEntregaMaximo: e.target.value })}
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

                <Button type="submit" color="orange" icon="save" content="Salvar" />
            </Form>
        </Container>
    );
}
