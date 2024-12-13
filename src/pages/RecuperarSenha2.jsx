import React, { useRef, useContext, useState, useEffect } from 'react';
import { RecuperacaoContext } from './RecuperacaoContext';
import api from '../api';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import BotaoSair from '../components/BotaoSair/BotaoSair';
import Container from '../components/Container/Container';
import FormContainer from '../components/FormContainer/FormContainer';
// import Input from './components/Input/Input';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import Botao from '../components/TelaCadastro/botao/Botao';
import Titulo from '../components/Titulo/Titulo';
import lateral from './img/rec2.png'



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  pading:10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubTitle = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const ImportantText = styled.p`
  font-size: 0.9rem;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`;


const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CodeInput = styled.input`
  width: 15%;
  padding: 10px;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ddd;
  background-color: #567ebb3e;
  margin-left:10px;
  &:focus {
    border-color: #2c5cc5;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const RecuperarSenha2 = ({ nextStep }) => {
  const {formData, setFormData} = useContext(RecuperacaoContext);
  const [codigo, setCodigo] = useState(formData.codigo);

  // Usando refs para acessar diretamente os inputs
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    const newCodigo = [...codigo];
    newCodigo[index] = value;    
    setCodigo(newCodigo.join(''));
    
    // Quando um valor é inserido, move para o próximo input se houver
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, codigo }));
  }, [codigo, setFormData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post (`/usuarios/recuperar-senha/validar-codigo`,{
        email: formData.email,
        codigo_recuperar_senha: formData.codigo
      });


      if(response.status === 200){
        setFormData({...formData, codigo});
        console.log(formData);
        Swal.fire({
          icon: 'success',
          title: 'Código validado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        nextStep();
      }
    }catch(error){
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Erro ao validar código',
        text: 'Código inválido, tente novamente!',
      });
    }
    setCodigo(Array(6).fill(''));
  };

  return (
    <Container>
      <FormContainer>
        <Titulo>Recuperar senha</Titulo>
        <SubTitle>informe o código enviado para o seu email</SubTitle>
        <ImportantText><b>IMPORTANTE: Deve ser o mesmo email da conta</b></ImportantText>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            {[...Array(6)].map((_, i) => (
              <CodeInput
                key={i}
                type="text"
                maxLength="1"
                ref={(el) => (inputRefs.current[i] = el)} // Armazena as referências dos inputs
                onChange={(e) => handleChange(e, i)} // Verifica quando o valor é alterado
                value={codigo[i] || ''} // Preenche o input com o valor do código
              />
            ))}
          </InputGroup>
          <Botao type="submit">Confirmar código</Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair></BotaoSair>
      </ImageContainer>
    </Container>
  );
};

export default RecuperarSenha2;
