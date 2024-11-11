
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, Icon,TextArea } from 'semantic-ui-react';

export default function FormEntregador () {

    return (

        <div>

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='nome'
                                    maxLength="100"
                                />

                                            <Form.Input
                                                required
                                                fluid
                                                label='CPF'
                                                
                                            >
                                                <InputMask 
                                                    mask="999.999.999-99"
                                                    placeholder="000.000.000-00"
                                                />
                                            <Form.Input
                                                 required
                                                 fluid
                                                 label='RG'
                                                        >
                                             <InputMask 
                                                 mask="99.999.999-9"
                                                 placeholder="00.000.000-0"
                                                />
                                           </Form.Input>
                                         <InputMask
                                        required
                                        mask="informe o titulo do produto"
                                    /> 
                                    
                                     
                                </Form.Input>

                            </Form.Group>
                            
                            <Form.Group widths='equal'>

                                <Form.Input fluid width={13} label='Descrição'>
                                       
                                    <TextArea placeholder='Tell us more' />

                                </Form.Input>

                            </Form.Group>
                               
                            <Form.Group>
                                <Form.Input
                                    fluid
                                    label='Valor Unitário'
                                    width={6}
                                    > 
                                   
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínimo em Minuto'
                                    width={60}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
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
