import React, { useContext } from 'react';
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
import { CadastroContext } from './CadastroContext';

function CadastroDadosCredenciais({ nextStep }) {

  const { formData, setFormData } = useContext(CadastroContext);

  const handleChange = (e) => {
    console.log("entrei aqui");
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleSubmit = (e) =>{
    console.log(formData)
    e.preventDefault();
    nextStep();
  }


  return (
    <Container>
      <FormContainer>
        <StepContainer>
        <Step active />
        <Step/>
        <Step/>
        </StepContainer>
        <Titulo>Cadastro Credenciais</Titulo>
        <Form onSubmit={handleSubmit}>
        <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="" />
        <Input label="Confirmar Email" type="email" placeholder="" />  
        <Input label="Senha" type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="" />
        <Input label="Confirmar Senha" type="password" placeholder="" />
        <Botao type="submit">Próxima Etapa </Botao>
        </Form>
      </FormContainer>
      <ImageContainer>
      <BotaoSair to={'/'}></BotaoSair>
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosCredenciais;
