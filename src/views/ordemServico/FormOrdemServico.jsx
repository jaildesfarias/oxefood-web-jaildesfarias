
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import InputMask from 'react-input-mask';

const FormOrdemServico = () => {
    const [Numero, setNumero] = useState('');
    const [PecasUtilizadas, setPecasUtilizadas] = useState('');
    const [ServicosEfetuados, setServicosEfetuados] = useState('');
    const [DataServico, setdataServico] = useState(false);
    const [Cliente , setCliente ] = useState(false);
    const [ValorServico , setValorServico  ] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const OrdemServico = {
            numero,
            pecasUtilizadas,
            servicosEfetuados,
            dataServico,
            cliente,
            valorServico
        };

        try {
            const response = await axios.post('/api/ordemServico', ordemServico); // Alterar URL para a sua API
            setSuccess('Venda cadastrada com sucesso!');
            setError('');
            // Resetar campos após envio
            setNumero('');
            setPecasUtilizadas('');
            setServicosEfetuados('');
            setDataServico('');
            setCliente(false);
            setValorServico(false);
           
        } catch (error) {
            setError('Erro ao cadastrar ordemServico. Tente novamente!');
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
            <h2>o dataServico</h2>
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
                        <option value="Aguardando Pagamento">O servicosEfetuados</option>
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

                

                <Button variant="primary" type="submit">
                    Salvar Venda
                </Button>
            </Form>
        </div>
    );
};

export default FormVenda;
