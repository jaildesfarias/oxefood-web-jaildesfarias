import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto() {
   const [lista, setLista] = useState([]);

   useEffect(() => {
       carregarLista();
   }, []);

   function carregarLista() {
       axios.get("http://localhost:8080/api/produtos")  // Altere para a URL correta de produtos
       .then((response) => {
           setLista(response.data);
       });
   }

   function formatarValor(valor) {
       // Caso você queira formatar o valor como moeda
       return `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;
   }

   const excluirProduto = (id) => {
       axios
           .delete(`http://localhost:8080/api/produtos/${id}`)
           .then(() => {
               alert("Produto excluído com sucesso!");
               carregarLista(); // Atualiza a lista após exclusão
           })
           .catch((error) => {
               alert("Erro ao excluir produto. Tente novamente.");
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
                           to='/form-produto'
                       />

                       <br /><br /><br />

                       <Table color='orange' sortable celled>
                           <Table.Header>
                               <Table.Row>
                                   <Table.HeaderCell>Código</Table.HeaderCell>
                                   <Table.HeaderCell>Título</Table.HeaderCell>
                                   <Table.HeaderCell>Descrição</Table.HeaderCell>
                                   <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                   <Table.HeaderCell>Tempo de Entrega Mínimo</Table.HeaderCell>
                                   <Table.HeaderCell>Tempo de Entrega Máximo</Table.HeaderCell>
                                   <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                               </Table.Row>
                           </Table.Header>

                           <Table.Body>
                               {lista.map(produto => (
                                   <Table.Row key={produto.id}>
                                       <Table.Cell>{produto.codigo}</Table.Cell>
                                       <Table.Cell>{produto.titulo}</Table.Cell>
                                       <Table.Cell>{produto.descricao}</Table.Cell>
                                       <Table.Cell>{formatarValor(produto.valorUnitario)}</Table.Cell>
                                       <Table.Cell>{produto.tempoEntregaMinimo} dias</Table.Cell>
                                       <Table.Cell>{produto.tempoEntregaMaximo} dias</Table.Cell>
                                       <Table.Cell textAlign='center'>
                                           <Button
                                               inverted
                                               circular
                                               color='green'
                                               title='Clique aqui para editar os dados deste produto'
                                               icon
                                               as={Link}
                                               to={`/form-produto/${produto.id}`}
                                           >
                                               <Icon name='edit' />
                                           </Button> &nbsp;
                                           <Button
                                               inverted
                                               circular
                                               color='rgreen'
                                               title='Clique aqui para remover este produto'
                                               icon
                                               onClick={() => excluirProduto(produto.id)}
                                           >
                                               <Icon name='trash' />
                                               <Link to="/form-cliente" state={{id: cliente.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
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
