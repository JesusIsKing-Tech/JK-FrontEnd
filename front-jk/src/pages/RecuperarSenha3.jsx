import React, { useContext,useState, useEffect } from 'react';
import { RecuperacaoContext } from './RecuperacaoContext';
import api from '../api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BotaoSair from '../components/BotaoSair/BotaoSair';
import Container from '../components/Container/Container';
import FormContainer from '../components/FormContainer/FormContainer';
import Input from '../components/Input/Input';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import Botao from '../components/TelaCadastro/botao/Botao';
import Titulo from '../components/Titulo/Titulo';
import lateral from './img/rec3.png';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 400px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CustomTitulo = styled(Titulo)`
  font-size: 2rem;
  color: #3b5998;
  text-align: center;
  margin-bottom: 30px;
`;

const BotaoCustomizado = styled(Botao)`
  width: 100%;
  background-color: #3b5998;
  color: white;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;



const RedefinirSenha = () => {
  const {formData, setFormData} = useContext(RecuperacaoContext);
  const [senha, setSenha] = useState(formData.senha);
  const [confirmSenha, setConfirmSenha] = useState('');
  const navigate = useNavigate();

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmSenhaChange = (e) => {
    setConfirmSenha(e.target.value);
  }

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, senha }));
  }, [senha, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

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
    };

    try {
      const response = await api.patch('/usuarios/recuperar-senha/nova-senha', {
        email: formData.email,
        senha: formData.senha
      });
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Senha redefinida com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/login');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao redefinir senha',
        text: error.response.data.message
      });
    }
  }


  return (
    <Wrapper>
      <FormContainer>
        <CustomTitulo>Redefinição de senha</CustomTitulo>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Nova senha:</Label>
            <Input type="password" placeholder="" value={formData.senha} onChange={handleSenhaChange} />
          </InputGroup>
          <InputGroup>
            <Label>Confirmar nova senha:</Label>
            <Input type="password" placeholder="" value={confirmSenha} onChange={handleConfirmSenhaChange}  />
          </InputGroup>
          <BotaoCustomizado type="submit">Alterar senha</BotaoCustomizado>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair></BotaoSair>
      </ImageContainer>
    </Wrapper>
  );
};

export default RedefinirSenha;
