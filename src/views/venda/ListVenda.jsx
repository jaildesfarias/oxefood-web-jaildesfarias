import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListVenda() {
   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregarLista();
   }, []);

   function carregarLista() {
       axios.get("http://localhost:8080/api/venda")  // Altere para a URL 
       .then((response) => {
           setLista(response.data);
       });
   }

   function formatarCliente(valor) {
       // Caso você queira formatar o valor como moeda
       return `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;
   }

   const excluirVenda = (id) => {
       axios
           .delete(`http://localhost:8080/api/vendas/${id}`)
           .then(() => {
               alert("Venda excluído com sucesso!");
               carregarLista(); // Atualiza a lista após exclusão
           })
           .catch((error) => {
               alert("Erro ao excluir venda. Tente novamente.");
               console.error(error);
           });
   };

   return (
       <div>
           <MenuSistema tela={'produto'} />
           <div style={{ marginTop: '3%' }}>
               <Container textAlign='justified'>
                   <h2>Produtos</h2>
                   <Divider />

                   <div style={{ marginTop: '4%' }}>
                       <Button
                           label='Novo'
                           circular
                           color='orange'
                           icon='clipboard outline'
                           floated='right'
                           as={Link}
                           to='/form-venda'
                       />

                       <br /><br /><br />

                       <Table color='orange' sortable celled>
                           <Table.Header>
                               <Table.Row>
                                   <Table.HeaderCell>cliente</Table.HeaderCell>
                                   <Table.HeaderCell>produto</Table.HeaderCell>
                                   <Table.HeaderCell>statusVenda</Table.HeaderCell>
                                   <Table.HeaderCell>dataVenda</Table.HeaderCell>
                                   <Table.HeaderCell>valorTotal</Table.HeaderCell>
                                   <Table.HeaderCell>observacao </Table.HeaderCell>
                                   <Table.HeaderCell>retiradaEmLoja</Table.HeaderCell>
                                   <Table.HeaderCell textAlign='center'>observacao</Table.HeaderCell>
                               </Table.Row>
                           </Table.Header>

                           <Table.Body>
                               {lista.map(venda => (
                                   <Table.Row key={venda.id}>
                                       <Table.Cell>{venda.cliente}</Table.Cell>
                                       <Table.Cell>{venda.produto}</Table.Cell>
                                       <Table.Cell>{venda.statusVend}</Table.Cell>
                                       <Table.Cell>{venda.dataVenda(venda.dataVenda)}</Table.Cell>
                                       <Table.Cell>{venda.observacao } dias</Table.Cell>
                                       <Table.Cell>{venda.tempoEntregaMaximo} dias</Table.Cell>
                                       <Table.Cell textAlign='center'>
                                           <Button
                                               inverted
                                               circular
                                               color='green'
                                               title='Clique aqui para editar os dados deste venda'
                                               icon
                                               as={Link}
                                               to={`/form-venda/${venda.id}`}
                                           >
                                               <Icon name='edit' />
                                           </Button> &nbsp;
                                           <Button
                                               inverted
                                               circular
                                               color='rgreen'
                                               title='Clique aqui para remover este venda'
                                               icon
                                               onClick={() =>remover(produto.id)}
                                           >
                                               <Icon name='trash' />
                                               <Link to="/form-venda" state={{id: cliente.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                           </Button> &nbsp;

                                       </Table.Cell>
                                   </Table.Row>
                               ))}
                           </Table.Body>
                       </Table>
                   </div>
               </Container>
           </div>
       </div>
   );
}
