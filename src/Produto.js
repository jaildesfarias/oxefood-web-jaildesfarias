import React, { useState, useEffect } from "react";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "./MenuSistema"; // Ajuste o caminho conforme necessário
import { Link } from "react-router-dom";

const Produto = ({ produto, onSubmit }) => {
    const [nome, setNome] = useState(produto ? produto.nome : "");
    const [descricao, setDescricao] = useState(produto ? produto.descricao : "");
    const [preco, setPreco] = useState(produto ? produto.preco : "");
    const [categoria, setCategoria] = useState(produto ? produto.categoria : "");

    useEffect(() => {
        if (produto) {
            setNome(produto.nome);
            setDescricao(produto.descricao);
            setPreco(produto.preco);
            setCategoria(produto.categoria);
        }
    }, [produto]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const produtoRequest = { nome, descricao, preco, categoria };
        onSubmit(produtoRequest);
    };

    return (
        <div>
            <MenuSistema tela="produto" />
            <div style={{ marginTop: "3%" }}>
                <Container textAlign="justified">
                    <h2>
                        <span style={{ color: "darkgray" }}>
                            Produto &nbsp;
                            <Icon name="angle double right" size="small" />
                        </span>
                        Cadastro
                    </h2>

                    <Divider />

                    <div style={{ marginTop: "4%" }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group widths="equal">
                                <Form.Input
                                    required
                                    fluid
                                    label="Nome"
                                    maxLength="100"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label="Descrição"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input fluid label="Preço" width={6}>
                                    <input
                                        type="number"
                                        value={preco}
                                        onChange={(e) => setPreco(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Categoria" width={6}>
                                    <input
                                        type="text"
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <div style={{ marginTop: "4%" }}>
                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition="left"
                                    color="orange"
                                    floated="right"
                                    as={Link}
                                    to="/list-produto"
                                >
                                    <Icon name="reply" />
                                    Voltar
                                </Button>

                                <Button
                                    inverted
                                    circular
                                    icon
                                    labelPosition="left"
                                    color="blue"
                                    floated="right"
                                    type="submit"
                                >
                                    <Icon name="save" />
                                    Salvar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Produto;
