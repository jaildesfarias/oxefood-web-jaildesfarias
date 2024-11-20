import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon, Select } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";

export default function FormEntregador() {
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

                                <Form.Input required fluid width={5} label="CPF">
                                    <InputMask
                                        mask="999.999.999-99"
                                        value={cpf}
                                        onChange={(e) => setCpf(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="RG"
                                    maxLength="100"
                                    width={5}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input fluid label="Data de Nascimento" width={2}>
                                    <InputMask
                                        mask="99/99/9999"
                                        value={dataNascimento}
                                        onChange={(e) => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Fone Celular" width={4}>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        value={foneCelular}
                                        onChange={(e) => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input fluid label="Fone Fixo" width={4}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        value={foneFixo}
                                        onChange={(e) => setFoneFixo(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label="Qtd Entregas Realizadas"
                                    width={3}
                                    value={qtdEntregas}
                                    onChange={(e) => setQtdEntregas(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Valor por Frete"
                                    width={3}
                                    value={valorFrete}
                                    onChange={(e) => setValorFrete(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label="Rua"
                                    width={16}
                                    value={enderecoRua}
                                    onChange={(e) => setEnderecoRua(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Número"
                                    width={7}
                                    value={enderecoNumero}
                                    onChange={(e) => setEnderecoNumero(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label="Bairro"
                                    width={7}
                                    value={enderecoBairro}
                                    onChange={(e) => setEnderecoBairro(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Cidade"
                                    width={7}
                                    value={enderecoCidade}
                                    onChange={(e) => setEnderecoCidade(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="CEP"
                                    width={3}
                                    value={enderecoCep}
                                    onChange={(e) => setEnderecoCep(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Field
                                    control={Select}
                                    label="UF"
                                    options={[
                                        { key: "SP", text: "São Paulo", value: "SP" },
                                        { key: "RJ", text: "Rio de Janeiro", value: "RJ" },
                                       {key: "PE", text: "Pernambuco", value: "PE" },
                                    ]}
                                    placeholder="Selecione"
                                    value={enderecoUf}
                                    onChange={(e, { value }) => setEnderecoUf(value)}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label="Complemento"
                                    width={16}
                                    value={complemento}
                                    onChange={(e) => setComplemento(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <label>Ativo:</label>
                                    <Form.Radio
                                        label="Sim"
                                        value="Sim"
                                        checked={ativo === "Sim"}
                                        onChange={() => setAtivo("Sim")}
                                    />
                                    <Form.Radio
                                        label="Não"
                                        value="Não"
                                        checked={ativo === "Não"}
                                        onChange={() => setAtivo("Não")}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                       
                        <div style={{ marginTop: "4%" }}>
                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="orange"
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
