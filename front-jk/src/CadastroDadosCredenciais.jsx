import React from 'react';
import Container from './components/Container/Container';
import FormContainer from './components/FormContainer/FormContainer';
import Step from './components/TelaCadastro/step/Step';
import StepContainer from './components/StepContainer/StepContainer';
import BotaoSair from './components/BotaoSair/BotaoSair';
import ImageContainer from './components/ImageContainer/ImageContainer';
import Form from './components/Form/Form';
import Botao from './components/TelaCadastro/botao/Botao';
import Input from './components/Input/Input';
import Titulo from './components/Titulo/Titulo'
import lateral from './img/cadastro1.png'





function CadastroDadosCredenciais() {
  return (
    <Container>
      <FormContainer>
        <StepContainer>
        <Step active />
        <Step/>
        <Step/>
        </StepContainer>
        <Titulo>Cadastro Credenciais</Titulo>
        <Form>
        <Input label="Email" type="email" placeholder="" />
        <Input label="Confirmar Email" type="email" placeholder="" />  
        <Input label="Senha" type="password" placeholder="" />
        <Input label="Confirmar Senha" type="password" placeholder="" />
        <Botao type="submit" to={"/cadastro2"}>Próxima Etapa </Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
      <BotaoSair to={'/'}></BotaoSair>
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosCredenciais;
