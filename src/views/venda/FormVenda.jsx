
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

        const [cliente, setCliente] = useState();
        const [produto, setProduto] = useState();
        const [statusVenda, setStatusVenda] = useState();
        const [valorTotal, setValorTotal] = useState();
        const [dataVenda, setDataVenda] = useState();
        const [observacao, setObservacao,] = useState();
        const [retiradaEmLoja, setRetiradaEmLoja,] = useState();

        function salvar() {

		let clienteRequest = {
            cliente: cliente ,
            produto: produto,
            statusVenda: statusVenda,
            valorTotal : valorTotal ,
            observacao: observacao,
		    retiradaEmLoja: retiradaEmLoja
		}
	
		axios.post("http://localhost:8080/api/venda", clienteRequest)
		.then((response) => {
		     console.log('Venda cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um venda.')
		})
	}


import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';

export default function FormCliente () {
        const [cliente, setCliente] = useState();
        const [produto, setProduto] = useState();
        const [statusVenda, setStatusVenda] = useState();
        const [valorTotal, setValorTotal] = useState();
        const [observacao, setObservacao] = useState();
        const [ retiradaEmLoja, setRetiradaEmLoja] = useState();


    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Cliente &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Cliente'
                                    maxLength="100"
                                    value={cliente}
		                        	onChange={e => setNome(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='produto'>
                                    <InputMask
                                        required
                                        value={produto}
			                         	onChange={e => setProduto(e.target.value)} 
                                    /> 
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='statusVenda'
                                    
                                    width={6}>
                                    <InputMask 
                                        mask="Pedido Cancelado"
                                      
                                    
                                    /> 
                                </Form.Input>
                               
                                <Form.Input
                                    fluid
                                    label='dataVenda'
                                    width={6}>
                                    <InputMask 
                                        mask="99/99/9999"
                                        maskLocalDate={null} 
                                        value={dataVenda}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='valorTotal'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99,00" 
                                        maskDouble={null}
                                       
                                    /> 
                                </Form.Input>
                               
                               <Form.Input
                                    fluid
                                    label='sobservacao'
                                    width={6}>
                                    <InputMask 
                                        mask="conferir"
                                        maskDouble={null}
                        
                           />
                         
                                </Form.Input>
                                <Form.Input
                                    fluid
                                    label='retiradaEmLoja'
                                    width={6}>
                                    <InputMask 
                                       maskBoolean={null}
                                        mask="notaFiscal"
                                    /> 
                                </Form.Input>


                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
				                floated='right'
                                onClick={() => não()}

                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                            >
                                <Icon name='save' />
                        sim
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
