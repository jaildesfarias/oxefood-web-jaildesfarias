import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divider, Form, Icon, Select } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import axios from "axios";

export default function FormEntregador() {
    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [foneCelular, setFoneCelular] = useState("");
    const [foneFixo, setFoneFixo] = useState("");
    const [qtdEntregas, setQtdEntregas] = useState("");
    const [valorFrete, setValorFrete] = useState("");
    const [enderecoRua, setEnderecoRua] = useState("");
    const [enderecoNumero, setEnderecoNumero] = useState("");
    const [enderecoBairro, setEnderecoBairro] = useState("");
    const [enderecoCidade, setEnderecoCidade] = useState("");
    const [enderecoCep, setEnderecoCep] = useState("");
    const [enderecoUf, setEnderecoUf] = useState("");
    const [complemento, setComplemento] = useState("");
    const [ativo, setAtivo] = useState("");

    const salvarEntregador = () => {
        const novoEntregador = {
            nome,
            cpf,
            dataNascimento,
            foneCelular,
            foneFixo,
            qtdEntregas,
            valorFrete,
            enderecoRua,
            enderecoNumero,
            enderecoBairro,
            enderecoCidade,
            enderecoCep,
            enderecoUf,
            complemento,
            ativo,
        };

        axios
            .post("http://localhost:8080/api/entregadores", novoEntregador)
            .then(() => {
                alert("Entregador cadastrado com sucesso!");
                navigate("/list-entregadores");
            })
            .catch((error) => {
                alert("Erro ao cadastrar o entregador. Tente novamente.");
                console.error(error);
            });
    };

    return (
        <div>
            <MenuSistema tela={"entregador"} />

            <div style={{ marginTop: "3%" }}>
                <Container textAlign="justified">
                    <h2>
                        <span style={{ color: "darkgray" }}>
                            Entregador &nbsp;
                            <Icon name="angle double right" size="small" />
                        </span>
                        Cadastro
                    </h2>

                    <Divider />

                    <div style={{ marginTop: "4%" }}>
                        <Form>
                            <Form.Group>
                                <Form.Input
                                    required
                                    fluid
                                    label="Nome"
                                    maxLength="100"
                                    width={9}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                                <Form.Input required fluid label="CPF" width={5}>
                                    <input
                                        type="text"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                        maxLength={14}
                                    />
                                </Form.Input>
                            </Form.Group>
               
                        </Form>

                        <div style={{ marginTop: "4%" }}>
                            <Button
                                inverted
                                circular
                                color="blue"
                                floated="right"
                                onClick={salvarEntregador}
                            >
                                <Icon name="save" />
                                Salvar
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
