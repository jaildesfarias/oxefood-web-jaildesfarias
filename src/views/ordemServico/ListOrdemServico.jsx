import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';

const VendaList = () => {
    const [vendas, setVendas] = useState([]);


    useEffect(() => {
        const fetchVendas = async () => {
            try {
                const response = await axios.get('/ordemServico');
                setOrdemServico(response.data); 
            } catch (error) {
                console.error('Erro ao buscar ordemServico:', error); 
            }
        };

        fetchVendas(); 
    }, []); 

   
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/ordemServico/${id}`);  
            setVendas(ordemServico.filter(ordemServico=> ordemServico.id !== id));  
            alert('OrdemServico excluída com sucesso!'); 
        } catch (error) {
            console.error('Erro ao excluir ordemServico:', error); 
            alert('Erro ao excluir a ordemServico!'); 
        }
    };

    return (
        <div>
            <h1>OrdemServico</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numero</th>
                        <th>PecasUtilizadas </th>
                        <th>ServicosEfetuados</th>
                        <th>DataServico</th>
                        <th>cliente</th>
                        <th>valorServico</th>
                    </tr>
                </thead>
                <tbody>
                    {vendas.map((ordemServico) => (
                        <tr key={ordemServico.numero}>
                            <td>{ordemServico.pecasUtilizadas}</td>
                            <td>{ordemServico.servicosEfetuados}</td>
                            <td>{ordemServico.dataServico}</td>
                            <td>{ordemServico.cliente}</td>
                            <td>{ordemServico.valorServico }</td>
                            <td>{ordemServico.servicosEfetuados ? 'alterar' : 'remover'}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(ordemServico.id)}>
                                Salvar OrdemServico
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListOrdemServico;
