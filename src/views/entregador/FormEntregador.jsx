
import React from "react";
import InputMask from 'react-input-mask';
import { Button, Container, Divider, Form, FormGroup, Icon,Select,TextArea } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function FormEntregador () {
   
        const [nome, setNome] = useState();
        const [cpf, setCpf] = useState();
        const [dataNascimento, setDataNascimento] = useState();
        const [foneCelular, setFoneCelular] = useState();
        const [foneFixo, setFoneFixo] = useState();
        const [qtdEntregador, setQtdEntregador] = useState();
        const [valorFrete, setValorFrete] = useState();
        const [enderecoRua, setEnderecoRua] = useState();
        const [enderecoCompleto, setEnderecooCompleto] = useState();
        const [enderecoNumero, set[EnderecoNumero] = useState();
        const [enderecoBairro, set[EnderecoBairro] = useState();
        const [enderecoCidade, set[enderecoCidade] = useState();  
        const [enderecoCep, set[enderecoCep] = useState();  
        const [enderecoUf, set[EnderecoUf] = useState(); 
        const [ativo, set[Ativo] = useState(); 
    
        return (

        <div>
               <MenuSistema tela={'cliente'} />

            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    width={9}
                                   
                                />

                                <Form.Input
                                    required
                                    fluid
                                    width={5}
                                    label='CPF'>
                                        
                                         <InputMask
                                        required
                                        
                                    /> 
                                    
                                     
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    maxLength="100"
                                    width={5}
                                   
                                />

                            </Form.Group>
                            
                            <Form.Group>

                            <Form.Input
                               
                                    fluid
                                    label='DataNacimento'
                                    width={2}
                                    > 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular '
                                    width={4}
                                    > 
                                
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Fixo '
                                    width={4}>
                                   </Form.Input> 
 
                                <Form.Input
                                    fluid
                                     label='qtd EtregasRealizadas'
                                    width={3}
                                >
                                </Form.Input>

                                <Form.Input
                                        fluid
                                        label='Valor Por Frete'
                                        width={3}
                                    >
                                    
                                </Form.Input>
                                
                            </Form.Group>
                               

                            <Form.Group>

                            <Form.Input
                                        fluid
                                        label='enderecoRua'
                                        width={16}
                                    >

                                        
                                    

                                     </Form.Input>

                                     <Form.Input
                                        fluid
                                        label='Número'
                                        width={7}
                                    >

                                     </Form.Input>
                             
                            
                                   
                            </Form.Group>

                            <Form.Group>

                            <Form.Input
                                        fluid
                                        label='Bairro'
                                        width={7}
                                    >
            

                                     </Form.Input>
                                    < Form.Input
                                        fluid
                                        label='Cidade'
                                        width={7}
                                    >
                                        
            

                                     </Form.Input>
                                     < Form.Input
                                        fluid
                                        label='Cep'
                                        width={3}
                                    >
                                        
            

                                     </Form.Input>


                            </Form.Group>
                            <FormGroup>
                               
                            <Form.Field
    fluid
    control={Select}
    label="UF"
    width={16}
    options={[
        { key: '1', text: 'Option 1', value: 'option1' },
        { key: '2', text: 'Option 2', value: 'option2' },
    ]}
    placeholder="Selecione"
/>


                           
                            </FormGroup>

                            <FormGroup>

                            <Form.Input
                                        fluid
                                        label='Complemento'
                                        width={16}
                                    >

                                     </Form.Input>
                               
                            </FormGroup>

                            <FormGroup>
                            <Form.Field label="Ativo:">
    <Form.Radio 
        id="sim" 
        name="ativo" 
        value="Sim" 
        label={
            <div>
                <Icon name='check' /> Sim
            </div>
        } 
    />
    <Form.Radio 
        id="nao" 
        name="ativo" 
        value="Não" 
        label={
            <div>
                <Icon name='times' /> Não
            </div>
        }
    />
</Form.Field>






                            </FormGroup>
                            
                        
                        
                        
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
