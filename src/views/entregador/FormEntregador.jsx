import axios from 'axios';
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MenuSistema from "./MenuSistema"; 

export default function FormEntregado() {
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [foneCelular, setFoneCelular] = useState("");
    const [foneFixo, setFoneFixo] = useState("");
    const [rg, setRg] = useState(""); 
    const [qtEntregaRealizadas, setQtEntregaRealizadas] = useState(0);  
    const [valorFrete, setValorFrete] = useState(0); 
    const [enderecoRua, setEnderecoRua] = useState("");  
    const [enderecoNumero, setEnderecoNumero] = useState("");  
    const [enderecoBairro, setEnderecoBairro] = useState(""); 
    const [enderecoCidade, setEnderecoCidade] = useState("");  
    const [enderecoCep, setEnderecoCep] = useState(""); 
    const [enderecoUf, setEnderecoUf] = useState(""); 
    const [enderecoCompleto, setEnderecoCompleto] = useState(""); 
    const [ativo, setAtivo] = useState(true);  // Status ativo

    function salvar() {
        let clienteRequest = {
            nome: nome,
            dataNascimento: dataNascimento,
            cpf: cpf,
            foneCelular: foneCelular,
            foneFixo: foneFixo,
            rg: rg,
            qtEntregaRealizadas: qtEntregaRealizadas,
            valorFrete: valorFrete,
            enderecoRua: enderecoRua,
            enderecoNumero: enderecoNumero,
            enderecoBairro: enderecoBairro,
            enderecoCidade: enderecoCidade,
            enderecoCep: enderecoCep,
            enderecoUf: enderecoUf,
            enderecoCompleto: enderecoCompleto,
            ativo: ativo
        };

        axios
            .post("http://localhost:8080/api/cliente", clienteRequest)
            .then(() => {
                console.log("Cliente cadastrado com sucesso.");
            })
            .catch(() => {
                console.error("Erro ao incluir um cliente.");
            });
    }

    return (
        <div>
            <MenuSistema tela={"cliente"} />

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
                        <Form>
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

                            {/* Campos adicionais */}
                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="RG"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label="Quantidade de Entregas Realizadas"
                                    type="number"
                                    value={qtEntregaRealizadas}
                                    onChange={(e) => setQtEntregaRealizadas(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="Valor Frete"
                                    type="number"
                                    value={valorFrete}
                                    onChange={(e) => setValorFrete(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label="Rua"
                                    value={enderecoRua}
                                    onChange={(e) => setEnderecoRua(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="Número"
                                    value={enderecoNumero}
                                    onChange={(e) => setEnderecoNumero(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label="Bairro"
                                    value={enderecoBairro}
                                    onChange={(e) => setEnderecoBairro(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="Cidade"
                                    value={enderecoCidade}
                                    onChange={(e) => setEnderecoCidade(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label="cep"
                                    value={enderecoCep}
                                    onChange={(e) => setEnderecoCep(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group widths="equal">
                                <Form.Input
                                    fluid
                                    label="UF"
                                    value={enderecoUf}
                                    onChange={(e) => setEnderecoUf(e.target.value)}
                                />
                                <Form.Input
                                    fluid
                                    label="Endereço Completo"
                                    value={enderecoCompleto}
                                    onChange={(e) => setEnderecoCompleto(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Checkbox
                                label="Ativo"
                                checked={ativo}
                                onChange={() => setAtivo(!ativo)}
                            />
                        </Form>

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
                                onClick={salvar}
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
