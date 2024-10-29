import React, { useState, useContext } from 'react';
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
import Swal from 'sweetalert2';

function CadastroDadosCredenciais({ nextStep }) {

  const { formData, setFormData } = useContext(CadastroContext);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleChange = (e) => {
    console.log("entrei aqui");
    setFormData({ ...formData,[e.target.name]: e.target.value });
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  }

  const handleConfirmSenhaChange = (e) => {
    setConfirmSenha(e.target.value);
  }

  const handleSubmit = (e) =>{
    console.log(formData)
    e.preventDefault();

    // Validação de email com confirmar email
    if(formData.email !== confirmEmail){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Os emails não coincidem! Confirme o email corretamente.',
        confirmButtonText: 'OK',
      });
    return
    }

    // Validação de senha com confirmar senha
    if(formData.senha !== confirmSenha){
      console.log(formData.senha, confirmSenha, "VALIDAÇÃO SENHA")
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'As senhas não coincidem! Confirme a senha corretamente.',
        confirmButtonText: 'OK',
      });
      return
    }

    // Validação de senha com REGEX (6 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caractere especial)
    const senhaRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;
    if(!senhaRegex.test(formData.senha)){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: 'A senha deve conter pelo menos: <br> <br> 6 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial.',
        confirmButtonText: 'OK',
      });
      return
    }
    nextStep();
  };


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
        <Input label="Confirmar Email" type="email" value={confirmEmail} onChange={handleConfirmEmailChange} />  
        <Input label="Senha" type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="" />
        <Input label="Confirmar Senha" type="password" value={confirmSenha} onChange={handleConfirmSenhaChange} placeholder="" />
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
