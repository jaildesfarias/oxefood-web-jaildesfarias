
import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { Button, Container, Divider, Form, Icon, Message } from "semantic-ui-react";
import MenuSistema from "./MenuSistema"; // Importe o componente MenuSistema
import { Link } from "react-router-dom";

const FormCliente = ({ cliente, onSubmit }) => {
    const [formData, setFormData] = useState({
        nome: "",
        cpf: "",
        dataNascimento: "",
        foneCelular: "",
        foneFixo: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false); // Estado para mensagem de sucesso

    useEffect(() => {
        if (cliente) {
            setFormData({
                nome: cliente.nome,
                cpf: cliente.cpf,
                dataNascimento: cliente.dataNascimento,
                foneCelular: cliente.foneCelular,
                foneFixo: cliente.foneFixo,
            });
        }
    }, [cliente]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validarFormulario = () => {
        const errors = {};
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        const regexCelular = /^\(\d{2}\) \d{5}-\d{4}$/;
        const regexFixo = /^\(\d{2}\) \d{4}-\d{4}$/;
        const regexDataNascimento = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!formData.nome.trim()) errors.nome = "O nome é obrigatório.";
        if (!regexCPF.test(formData.cpf)) errors.cpf = "CPF inválido. Use o formato 000.000.000-00.";
        if (!regexCelular.test(formData.foneCelular)) errors.foneCelular = "Celular inválido. Use o formato (99) 99999-9999.";
        if (!regexFixo.test(formData.foneFixo)) errors.foneFixo = "Fone fixo inválido. Use o formato (99) 9999-9999.";
        if (!regexDataNascimento.test(formData.dataNascimento)) errors.dataNascimento = "Data inválida. Use o formato DD/MM/AAAA.";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            onSubmit(formData);
            setSuccess(true); // Mostra mensagem de sucesso
            setTimeout(() => setSuccess(false), 3000); // Remove a mensagem após 3 segundos

            // Limpa o formulário
            setFormData({
                nome: "",
                cpf: "",
                dataNascimento: "",
                foneCelular: "",
                foneFixo: "",
            });
            setErrors({});
        }
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

                    {success && (
                        <Message success>
                            <Message.Header>Sucesso!</Message.Header>
                            <p>Cliente cadastrado com sucesso.</p>
                        </Message>
                    )}

                    <div style={{ marginTop: "4%" }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group widths="equal">
                                <Form.Input
                                    required
                                    fluid
                                    label="Nome"
                                    name="nome"
                                    maxLength="100"
                                    placeholder="Digite o nome completo"
                                    value={formData.nome}
                                    onChange={handleInputChange}
                                    error={errors.nome ? { content: errors.nome, pointing: "below" } : null}
                                />

                                <Form.Input required fluid label="CPF">
                                    <InputMask
                                        mask="999.999.999-99"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleInputChange}
                                    />
                                    {errors.cpf && <span style={{ color: "red" }}>{errors.cpf}</span>}
                                </Form.Input>
                            </Form.Group>

                            <Form.Group>
                                <Form.Input fluid label="Fone Celular" width={6}>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        name="foneCelular"
                                        value={formData.foneCelular}
                                        onChange={handleInputChange}
                                    />
                                    {errors.foneCelular && <span style={{ color: "red" }}>{errors.foneCelular}</span>}
                                </Form.Input>

                                <Form.Input fluid label="Fone Fixo" width={6}>
                                    <InputMask
                                        mask="(99) 9999-9999"
                                        name="foneFixo"
                                        value={formData.foneFixo}
                                        onChange={handleInputChange}
                                    />
                                    {errors.foneFixo && <span style={{ color: "red" }}>{errors.foneFixo}</span>}
                                </Form.Input>

                                <Form.Input fluid label="Data Nascimento" width={6}>
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        name="dataNascimento"
                                        value={formData.dataNascimento}
                                        onChange={handleInputChange}
                                    />
                                    {errors.dataNascimento && <span style={{ color: "red" }}>{errors.dataNascimento}</span>}
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
