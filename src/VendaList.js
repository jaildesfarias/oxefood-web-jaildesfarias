
import React, { useEffect, useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

const VendaList = () => {
    const [vendas, setVendas] = useState([]);
    const [showModal, setShowModal] = useState(false);  // Controla a exibição do modal
    const [observacao, setObservacao] = useState('');  // Armazena a observação da venda

    // Função para carregar as vendas ao montar o componente
    useEffect(() => {
        const fetchVendas = async () => {
            try {
                const response = await axios.get('/venda'); // Chama a API para buscar as vendas
                setVendas(response.data); // Atualiza o estado com os dados das vendas
            } catch (error) {
                console.error('Erro ao buscar vendas:', error); // Tratamento de erro
            }
        };

        fetchVendas(); // Chama a função para buscar as vendas ao montar o componente
    }, []); // O array vazio [] significa que a requisição será feita apenas uma vez

    // Função para excluir uma venda
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/venda/${id}`);  // Chama a API para excluir a venda
            setVendas(vendas.filter(venda => venda.id !== id));  // Remove a venda da lista local
            alert('Venda excluída com sucesso!');  // Exibe um alerta de sucesso
        } catch (error) {
            console.error('Erro ao excluir venda:', error); // Tratamento de erro
            alert('Erro ao excluir a venda!');  // Exibe um alerta de erro
        }
    };

    // Função para abrir o modal e exibir a observação
    const handleShowObservacao = (observacao) => {
        setObservacao(observacao);  // Armazena a observação no estado
        setShowModal(true);  // Abre o modal
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setShowModal(false);  // Fecha o modal
    };

    return (
        <div>
            <h1>Lista de Vendas</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Data da Venda</th>
                        <th>Valor Total</th>
                        <th>Retirada em Loja</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.id}</td>
                            <td>{venda.status}</td>
                            <td>{venda.dataVenda}</td>
                            <td>{venda.valorTotal}</td>
                            <td>{venda.retiradaEmLoja ? 'Sim' : 'Não'}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleShowObservacao(venda.observacao)}>
                                    Ver Observação
                                </Button>
                                <Button variant="danger" onClick={() => handleDelete(venda.id)}>
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal para exibir a observação da venda */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Observação da Venda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{observacao}</p> {/* Exibe a observação da venda */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default VendaList;
