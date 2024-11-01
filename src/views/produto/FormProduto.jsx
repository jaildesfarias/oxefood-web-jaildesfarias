
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon,TextArea } from 'semantic-ui-react';

export default function FormProduto () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='titulo'
                                    maxLength="100"
                                     placeholder="Informe o título do produto"
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='codigo de produto'>
                                        
                                         <InputMask
                                        required
                                        mask="informe o titulo do produto"
                                         placeholder="Informe o título do produto"
                                    /> 
                                     
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group widths='equal'>

                                <Form.Input fluid width={13} label='Descrição'>
                                       
                                    <TextArea placeholder='Informe a descrição do produto' />

                                </Form.Input>

                            </Form.Group>
                               

                            <Form.Group>
                                <Form.Input
                                required
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    > 
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                     label='Tempo de Entrega Mínimo em Minuto'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="30"
                                    /> 
                                    
                                </Form.Input>
                                <Form.Input
                                    fluid
                                     label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="40"
                                    /> 
                                    
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
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
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
