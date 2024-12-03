
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import InputMask from 'react-input-mask';

const FormVenda = () => {
    const [statusVenda, setStatusVenda] = useState('');
    const [dataVenda, setDataVenda] = useState('');
    const [valorTotal, setValorTotal] = useState('');
    const [retiradaEmLoja, setRetiradaEmLoja] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const venda = {
            statusVenda,
            dataVenda,
            valorTotal,
            retiradaEmLoja,
        };

        try {
            const response = await axios.post('/api/vendas', venda); // Alterar URL para a sua API
            setSuccess('Venda cadastrada com sucesso!');
            setError('');
            // Resetar campos após envio
            setStatusVenda('');
            setDataVenda('');
            setValorTotal('');
            setRetiradaEmLoja(false);
        } catch (error) {
            setError('Erro ao cadastrar venda. Tente novamente!');
            setSuccess('');
        }
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <div>
            <h2>Cadastrar Venda</h2>
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="statusVenda">
                    <Form.Label>Status da Venda</Form.Label>
                    <Form.Select
                        value={statusVenda}
                        onChange={(e) => setStatusVenda(e.target.value)}
                        required
                    >
                        <option value="">Selecione</option>
                        <option value="Pedido Cancelado">Pedido Cancelado</option>
                        <option value="Aguardando Pagamento">Aguardando Pagamento</option>
                        <option value="Pago">Pago</option>
                        <option value="Entregue">Entregue</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="dataVenda">
                    <Form.Label>Data da Venda</Form.Label>
                    <InputMask
                        mask="99/99/9999"
                        value={dataVenda}
                        onChange={(e) => setDataVenda(e.target.value)}
                    >
                        {(inputProps) => <Form.Control {...inputProps} placeholder="DD/MM/AAAA" required />}
                    </InputMask>
                </Form.Group>

                <Form.Group controlId="valorTotal">
                    <Form.Label>Valor Total</Form.Label>
                    <Form.Control
                        type="number"
                        value={valorTotal}
                        onChange={(e) => setValorTotal(e.target.value)}
                        placeholder="Valor Total da Venda"
                        required
                    />
                </Form.Group>

                <Form.Group controlId="retiradaEmLoja">
                    <Form.Label>Retirada em Loja</Form.Label>
                    <Form.Check
                        type="radio"
                        label="Sim"
                        value={true}
                        name="retiradaEmLoja"
                        checked={retiradaEmLoja === true}
                        onChange={() => setRetiradaEmLoja(true)}
                    />
                    <Form.Check
                        type="radio"
                        label="Não"
                        value={false}
                        name="retiradaEmLoja"
                        checked={retiradaEmLoja === false}
                        onChange={() => setRetiradaEmLoja(false)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Salvar Venda
                </Button>
            </Form>
        </div>
    );
};

export default FormVenda;
