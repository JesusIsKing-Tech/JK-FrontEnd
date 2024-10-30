import React, { useContext, useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import FormContainer from '../components/FormContainer/FormContainer';
import Step from '../components/TelaCadastro/step/Step';
import StepContainer from '../components/StepContainer/StepContainer';
import BotaoSair from '../components/BotaoSair/BotaoSair';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import Form from '../components/Form/Form';
import Botao from '../components/TelaCadastro/botao/Botao';
import Input from '../components/Input/Input';
import SelectOpt from '../components/TelaCadastro/selectOpt/SelectOpt'; 
import Titulo from '../components/Titulo/Titulo';
import { CadastroContext } from './CadastroContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import api from '../api';
import lateral from './img/cadastro2.png'


function CadastroDadosPessoais({ nextStep }) {

  const { formData, setFormData } = useContext(CadastroContext);
  const [gender, setGender] = useState(''); // Estado para o gênero

  const onSubmit = (data) => {
    console.log(data);
    nextStep(); // Avançar para a próxima etapa
  };

  const handleChange = (e)=>{
    const { name, value } = e.target

    if(name in formData.endereco){
      setFormData((prevState) => ({
         ...prevState,
          endereco: {
            ...prevState.endereco,
            [name]: value,
          },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }

  };

  const handleGenderChange = (e) =>{
    setGender(e.target.value);
    setFormData({ ...formData, genero: e.target.value})
  };

  useEffect(() => {
    const fetchAddress = async () => {
      if(formData.endereco.cep.length === 8){
        try{
          const response = await api.get(`/enderecos/buscar/${formData.endereco.cep}`);
          console.log(response);
          if(response && response.data){

            const { logradouro, bairro, localidade, uf } = response.data;
            setFormData((prevState) => ({
              ...prevState,
              endereco: {
                ...prevState.endereco,
                logradouro,
                bairro,
                localidade,
                uf
              }
            }));
          }else{
            console.error('RESPONSE TA ERRADA', response);
          }
        }catch(error){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message,
            confirmButtonText: 'OK',
          });
        }
      }
    }
    fetchAddress();
  }, [formData.endereco.cep, setFormData]);

  const handleSubmit = (e) =>{
    console.log(formData);
    e.preventDefault();
    nextStep();
  };

  const genderOptions = [
    { value: '', label: 'Selecione o gênero' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' }
  ];

  return (
    <Container>
      <FormContainer>
        <StepContainer>
          <Step active />
          <Step active />
          <Step />
        </StepContainer>
        <Titulo>Cadastro Dados Pessoais</Titulo>
        <Form onSubmit={handleSubmit}>
          <Input label="Nome Completo" type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="" />
          <SelectOpt label="Gênero" options={genderOptions} value={formData.genero} onChange={handleGenderChange} />
          <Input label="Data de Nascimento" type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} placeholder="Dia/Mês/Ano" />
          <Input label="Telefone" type="" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="11912345678" />
          <Input label="CEP" type="text" name="cep" value={formData.endereco.cep} onChange={handleChange} placeholder="" />
          <Input label="Rua" readOnly style={{ background: 'lightgray' }} type="text"name="logradouro" value={formData.endereco.logradouro} onChange={handleChange}  />
          <Input label="Número" type="text" name="numero" value={formData.endereco.numero} onChange={handleChange} placeholder="" />
          <Input label="Complemento" type="text" name="complemento" value={formData.endereco.complemento} onChange={handleChange} placeholder="" />
          <Input label="Bairro" readOnly type="text" name="bairro" value={formData.endereco.bairro} onChange={handleChange} style={{ backgroundColor: 'lightgray' }} />
          <Input label="Cidade" readOnly type="text" name="localidade" value={formData.endereco.localidade} onChange={handleChange} style={{ backgroundColor: 'lightgray' }} />
          <Input label="UF" readOnly type="text" name="uf" value={formData.endereco.uf} onChange={handleChange} style={{ backgroundColor: 'lightgray' }} />
          <Botao type="submit" to={'/cadastro3'}>Próxima</Botao>
        </Form>
      </FormContainer>
      <ImageContainer image={lateral}>
        <BotaoSair to={"/"} />
      </ImageContainer>
    </Container>
  );
}

export default CadastroDadosPessoais;
