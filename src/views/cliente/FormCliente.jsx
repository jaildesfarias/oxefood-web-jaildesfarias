import React, { useState, useEffect } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import MenuSistema from "./MenuSistema"; // Importe o componente MenuSistema
import { Link } from "react-router-dom";

const FormCliente = ({ cliente, onSubmit }) => {
    const [nome, setNome] = useState(cliente ? cliente.nome : "");
    const [cpf, setCpf] = useState(cliente ? cliente.cpf : "");
    const [dataNascimento, setDataNascimento] = useState(cliente ? cliente.dataNascimento : "");
    const [foneCelular, setFoneCelular] = useState(cliente ? cliente.foneCelular : "");
    const [foneFixo, setFoneFixo] = useState(cliente ? cliente.foneFixo : "");

    useEffect(() => {
        if (cliente) {
            setNome(cliente.nome);
            setCpf(cliente.cpf);
            setDataNascimento(cliente.dataNascimento);
            setFoneCelular(cliente.foneCelular);
            setFoneFixo(cliente.foneFixo);
        }
    }, [cliente]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const clienteRequest = { nome, cpf, dataNascimento, foneCelular, foneFixo };
        onSubmit(clienteRequest);
    };

    return (
        <div>
            <MenuSistema tela="cliente" />
            <div style={{ marginTop: "3%" }}>
                <Container textAlign="justified">
                    <h2>
                        <span style={{ color: "darkgray" }}>
                            Cliente &nbsp;
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

                                <Form.Input required fluid label="CPF">
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input fluid label="Fone Celular" width={6}>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        value={foneCelular}
                                        onChange={(e) => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Fone Fixo" width={6}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        value={foneFixo}
                                        onChange={(e) => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Data Nascimento" width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
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
                                    to="/list-cliente"
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

export default FormCliente;
