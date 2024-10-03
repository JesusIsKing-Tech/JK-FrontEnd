import React, { useRef } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import logo from './img/logo.png'; // Adicione o caminho correto da sua logo

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 120px;
  height: auto;
  cursor: pointer;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5));
`;

const Title = styled.h2`
  color: #1f2c5c;
  font-size: 2rem;
  margin-bottom: 10px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
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
  &:focus {
    border-color: #2c5cc5;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2c5cc5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #244aa6;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url("/mnt/data/image.png"); /* Adicione a URL correta da imagem */
  background-size: cover;
  background-position: center;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #2c5cc5;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #244aa6;
  }
`;

const RecuperarSenha2 = () => {
  // Usando refs para acessar diretamente os inputs
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    
    // Quando um valor é inserido, move para o próximo input se houver
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Exibe o SweetAlert quando o formulário é submetido
    Swal.fire({
      title: 'Sucesso!',
      text: 'Senha alterada com sucesso!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <Container>
      <FormContainer>
        <Logo src={logo} alt="Logo" />
        <Title>Recuperar senha</Title>
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
              />
            ))}
          </InputGroup>
          <Button type="submit">Confirmar código</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ExitButton>Sair</ExitButton>
      </ImageContainer>
    </Container>
  );
};

export default RecuperarSenha2;
