import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from "semantic-ui-react";
import MenuSistema from "../../MenuSistema";
import axios from "axios";

export default function ListEntregador() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        carregarLista();
    }, []);

    const carregarLista = () => {
        axios.get("http://localhost:8080/api/entregadores").then((response) => {
            setLista(response.data);
        });
    };

    const excluirEntregador = (id) => {
        axios
            .delete(`http://localhost:8080/api/entregadores/${id}`)
            .then(() => {
                alert("Entregador excluído com sucesso!");
                carregarLista();
            })
            .catch((error) => {
                alert("Erro ao excluir entregador. Tente novamente.");
                console.error(error);
            });
    };

    return (
        <div>
            <MenuSistema tela={"entregador"} />
            <div style={{ marginTop: "3%" }}>
                <Container textAlign="justified">
                    <h2>Entregadores</h2>
                    <Divider />
                    <Button
                        label="Novo"
                        circular
                        color="blue"
                        icon="clipboard outline"
                        floated="right"
                        as={Link}
                        to="/form-entregador"
                    />
                    <Table celled striped>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Nome</Table.HeaderCell>
                                <Table.HeaderCell>cpf</Table.HeaderCell>
                                <Table.HeaderCell>Fone Celular</Table.HeaderCell>
                                <Table.HeaderCell>Fone Fixo</Table.HeaderCell>
                                <Table.HeaderCell>Qtd. Entregas</Table.HeaderCell>
                                <Table.HeaderCell>Endereço Rua</Table.HeaderCell>
                                <Table.HeaderCell>Endereço Número</Table.HeaderCell>
                                <Table.HeaderCell>Endereço Bairro</Table.HeaderCell>
                                <Table.HeaderCell>Endereço Cidade</Table.HeaderCell>
                                <Table.HeaderCell>Endereço Cep</Table.HeaderCell>
                                <Table.HeaderCell>Endereço UF</Table.HeaderCell>
                                <Table.HeaderCell>Complemento</Table.HeaderCell>
                                <Table.HeaderCell>Ativo</Table.HeaderCell>
                                <Table.HeaderCell>Ações</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {lista.map((entregador) => (
                                <Table.Row key={entregador.id}>
                                    <Table.Cell>{entregador.nome}</Table.Cell>
                                    <Table.Cell>{entregador.cpf}</Table.Cell>
                                    <Table.Cell>{entregador.foneCelular}</Table.Cell>
                                    <Table.Cell>{entregador.foneFixo}</Table.Cell>
                                    <Table.Cell>{entregador.qtdEntregas}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoRua}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoNumero}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoBairro}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoCidade}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoCep}</Table.Cell>
                                    <Table.Cell>{entregador.enderecoUf}</Table.Cell>
                                    <Table.Cell>{entregador.complemento}</Table.Cell>
                                    <Table.Cell>{entregador.ativo ? 'Sim' : 'Não'}</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button
                                            circular
                                            color="green"
                                            icon="edit"
                                            as={Link}
                                            to={`/form-entregador/${entregador.id}`}
                                        />
                                        <Button
                                            circular
                                            color="red"
                                            icon="trash"
                                            onClick={() => excluirEntregador(entregador.id)}
                                        />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Container>
            </div>
        </div>
    );
}
