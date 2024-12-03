import React, { useEffect, useState } from 'react';
import { Table, Alert } from 'react-bootstrap';
import axios from 'axios';

const VendaList = () => {
    const [vendas, setVendas] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVendas = async () => {
            try {
                const response = await axios.get('/venda');
                setVendas(response.data);
            } catch (error) {
                console.error('Erro ao buscar vendas:', error);
                setError('Não foi possível carregar as vendas. Tente novamente mais tarde.');
            }
        };

        fetchVendas();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <div>
            <h1>Lista de Vendas</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Data da Venda</th>
                        <th>Valor Total</th>
                        <th>Retirada em Loja</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((venda) => (
                        <tr key={venda.id}>
                            <td>{venda.id}</td>
                            <td>{venda.status}</td>
                            <td>{formatDate(venda.dataVenda)}</td>
                            <td>{formatCurrency(venda.valorTotal)}</td>
                            <td>{venda.retiradaEmLoja ? 'Sim' : 'Não'}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default VendaList;
