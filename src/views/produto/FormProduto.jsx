import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Container, Divider, Form, Input, Message } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { Link } from 'react-router-dom';

export default function FormProduto() {
   const [produto, setProduto] = useState({
       codigo: '',
       titulo: '',
       descricao: '',
       valorUnitario: '',
       tempoEntregaMinimo: '',
       tempoEntregaMaximo: ''
   });

   const [erro, setErro] = useState('');
   const { id } = useParams();
   const history = useHistory();
   
   useEffect(() => {
       if (id) {
           axios.get(`http://localhost:8080/api/produtos/${id}`)
               .then((response) => {
                   setProduto(response.data);
               })
               .catch((error) => {
                   console.error("Erro ao carregar produto: ", error);
                   setErro("Erro ao carregar produto.");
               });
       }
   }, [id]);

   const handleChange = (e) => {
       setProduto({
           ...produto,
           [e.target.name]: e.target.value
       });
   };

   const handleSubmit = (e) => {
       e.preventDefault();

       if (!produto.codigo || !produto.titulo || !produto.valorUnitario || !produto.tempoEntregaMinimo || !produto.tempoEntregaMaximo) {
           setErro("Todos os campos devem ser preenchidos.");
           return;
       }

       const produtoData = { ...produto };

       if (id) {
           // Atualizar produto existente
           axios.put(`http://localhost:8080/api/produtos/${id}`, produtoData)
               .then(() => {
                   alert("Produto atualizado com sucesso!");
                   history.push('/list-produto');
               })
               .catch((error) => {
                   console.error("Erro ao atualizar produto: ", error);
                   setErro("Erro ao atualizar produto. Tente novamente.");
               });
       } else {
           // Criar novo produto
           axios.post('http://localhost:8080/api/produtos', produtoData)
               .then(() => {
                   alert("Produto cadastrado com sucesso!");
                   history.push('/list-produto');
               })
               .catch((error) => {
                   console.error("Erro ao cadastrar produto: ", error);
                   setErro("Erro ao cadastrar produto. Tente novamente.");
               });
       }
   };

   return (
       <div>
           <MenuSistema tela={'produto'} />
           <div style={{ marginTop: '3%' }}>
               <Container textAlign='justified'>
                   <h2>{id ? 'Editar Produto' : 'Novo Produto'}</h2>
                   <Divider />

                   {erro && <Message negative>{erro}</Message>}

                   <Form onSubmit={handleSubmit}>
                       <Form.Field>
                           <label>Código</label>
                           <Input
                               type="text"
                               name="codigo"
                               value={produto.codigo}
                               onChange={handleChange}
                               placeholder="Código do produto"
                               required
                           />
                       </Form.Field>

                       <Form.Field>
                           <label>Título</label>
                           <Input
                               type="text"
                               name="titulo"
                               value={produto.titulo}
                               onChange={handleChange}
                               placeholder="Título do produto"
                               required
                           />
                       </Form.Field>

                       <Form.Field>
                           <label>Descrição</label>
                           <Input
                               type="text"
                               name="descricao"
                               value={produto.descricao}
                               onChange={handleChange}
                               placeholder="Descrição do produto"
                           />
                       </Form.Field>

                       <Form.Field>
                           <label>Valor Unitário</label>
                           <Input
                               type="number"
                               name="valorUnitario"
                               value={produto.valorUnitario}
                               onChange={handleChange}
                               placeholder="Valor unitário"
                               required
                           />
                       </Form.Field>

                       <Form.Field>
                           <label>Tempo de Entrega Mínimo (dias)</label>
                           <Input
                               type="number"
                               name="tempoEntregaMinimo"
                               value={produto.tempoEntregaMinimo}
                               onChange={handleChange}
                               placeholder="Tempo de entrega mínimo"
                               required
                           />
                       </Form.Field>

                       <Form.Field>
                           <label>Tempo de Entrega Máximo (dias)</label>
                           <Input
                               type="number"
                               name="tempoEntregaMaximo"
                               value={produto.tempoEntregaMaximo}
                               onChange={handleChange}
                               placeholder="Tempo de entrega máximo"
                               required
                           />
                       </Form.Field>

                       <Button
                           type="submit"
                           color="orange"
                           icon="save"
                           content="Salvar"
                       />
                       <Button
                           as={Link}
                           to="/list-produto"
                           color="red"
                           icon="arrow left"
                           content="Voltar"
                       />
                   </Form>
               </Container>
           </div>
       </div>
   );
}
