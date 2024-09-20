import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

// Estilização usando Styled Components
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f8f9fa;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Step = styled.div`
  height: 10px;
  width: 100px;
  background-color: ${(props) => (props.active ? '#2c5cc5' : '#e0e0e0')};
  border-radius: 5px;
  margin-right: 10px;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  color: #1f2c5c;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  width: 80%;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: ${(props) => (props.fullWidth ? 'span 2' : 'span 1')};
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
`;

const Button = styled.button`
  grid-column: span 2;
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
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  grid-column: span 2;
`;

const ImageContainer = styled.div`
  width: 50%;
  background-image: url('https://istoe.com.br/wp-content/uploads/2021/01/neymar-bruna-marquezine.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const ExitButton = styled.button`
  background-color: #244aa6;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 20px;
  right: 20px;
`;

function CadastroDadosPessoais({ nextStep }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };


  return (
    <Container>
      <FormContainer>
        <ProgressBar>
          <StepIndicator>
            <Step active></Step>
            <Step active></Step>
            <Step></Step>
          </StepIndicator>
        </ProgressBar>
        <Title>Cadastro Dados Pessoais</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup fullWidth>
            <Label>Nome Completo</Label>
            <Input type="text" {...register('nomeCompleto')} />
          </InputGroup>
          
          <InputGroup>
            <Label>Gênero</Label>
            <Select {...register('genero')}>
              <option value="">Selecione o gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label>Data de Nascimento</Label>
            <Input type="text" placeholder="Dia/Mês/Ano" {...register('dia')} />
          </InputGroup>
    
          <InputGroup>
            <Label>CEP</Label>
            <Input type="text" {...register('cep')} />
          </InputGroup>
          
          <InputGroup fullWidth>
            <Label>Rua</Label>
            <Input type="text" {...register('rua')} />
          </InputGroup>
          
          <InputGroup>
            <Label>Número</Label>
            <Input type="text" {...register('numero')} />
          </InputGroup>
          
          <InputGroup>
            <Label>Bairro</Label>
            <Input type="text" {...register('bairro')} />
          </InputGroup>
          
          <InputGroup>
            <Label>Cidade</Label>
            <Input type="text" {...register('cidade')} />
          </InputGroup>

          <InputGroup>
            <Label>UF</Label>
            <Input type="text" {...register('uf')} />
          </InputGroup>

          {/* <RadioGroup>
            <Label>Precisa de doação de alimentos?</Label>
            <label>
              <input type="radio" value="sim" {...register('precisaDoacao')} /> Sim
            </label>
            <label>
              <input type="radio" value="nao" {...register('precisaDoacao')} /> Não
            </label>
          </RadioGroup> */}

          <Button type="submit">Próxima</Button>
        </Form>
      </FormContainer>
      <ImageContainer>
        <ExitButton>Sair</ExitButton>
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosPessoais;
