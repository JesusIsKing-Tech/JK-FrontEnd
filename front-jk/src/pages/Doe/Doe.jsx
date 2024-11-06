import { useState } from 'react';
import styles from './Doe.module.css';
import HeaderLogado from '../../components/HeaderLogado/HeaderLogado';
import Titulo from '../../components/Titulo/Titulo';
import FormContainer from '../../components/FormContainer/FormContainer';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Botao from '../../components/TelaCadastro/botao/Botao';
import ImageContainer from'../../components/ImageContainer/ImageContainer'
import lateral from '../../img/doe.png'
import Container from '../../components/Container/Container';

const Doe = () => {
    const [verificado, setVerificado] = useState(false); // Inicialmente não verificado
    const [linhaSelecionada, setLinhaSelecionada] = useState(null);

    const familia = {
        nomeFamilia: "Família Silva",
        membros: [
            { nome: "Robert Silva", dataNascimento: "20/02/1986", responsavel: false },
            { nome: "Andressa Silva", dataNascimento: "20/02/1986", responsavel: false },
            { nome: "Anderson Silva", dataNascimento: "20/02/1986", responsavel: false }
        ]
    };

    const handleVerificar = (event) => {
        event.preventDefault();
        setVerificado(true);
    };

    const selecionarLinha = (index) => {
        setLinhaSelecionada(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <>
            <HeaderLogado />
            <Container>
            <ImageContainer image={lateral}>
            </ImageContainer>
            <FormContainer>
                <Titulo>Selecione quem veio retirar a doação</Titulo>
                {verificado ? (
                    <div className={styles.cardFamilia}>
                        <div className={styles.boxTitulo}>
                            <h2>{familia.nomeFamilia}</h2>
                        </div>
                        <div className={styles.dados}>
                            <div className={styles.campo}>
                                <h3>Nome</h3>
                                {familia.membros.map((membro, index) => (
                                    <p
                                        key={index}
                                        className={`${styles.linha} ${linhaSelecionada === index ? styles.linhaSelecionada : ''}`}
                                        onClick={() => selecionarLinha(index)}
                                    >
                                        {membro.nome}
                                    </p>
                                ))}
                            </div>

                            <div className={styles.campo}>
                                <h3>Dt Nasc.</h3>
                                {familia.membros.map((membro, index) => (
                                    <p
                                        key={index}
                                        className={`${styles.linha} ${linhaSelecionada === index ? styles.linhaSelecionada : ''}`}
                                        onClick={() => selecionarLinha(index)}
                                    >
                                        {membro.dataNascimento}
                                    </p>
                                ))}
                            </div>

                            <div className={styles.campo}>
                                <h3>Responsável</h3>
                                {familia.membros.map((membro, index) => (
                                    <p
                                        key={index}
                                        className={styles.linha2}
                                    >
                                        <input
                                            type="radio"
                                            name="responsavel"
                                            checked={linhaSelecionada === index}
                                            onChange={() => selecionarLinha(index)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </p>
                                ))}
                            </div>
                        </div>
                        <Botao onClick={() => alert("Doação realizada!")}>Doar</Botao>
                    </div>
                ) : (
                    
                    <Form onSubmit={handleVerificar}>
                        <Input label="CEP" type="text" name="cep" />
                        <Input label="Rua" style={{ background: '#f0f0f0', border: 'none' }} type="text" name="logradouro" />
                        <Input label="Número" type="text" name="numero" />
                        <Input label="Complemento" type="text" name="complemento" />
                        <Input label="Bairro" type="text" name="bairro" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Input label="Cidade" type="text" name="localidade" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Input label="UF" type="text" name="uf" style={{ backgroundColor: '#f0f0f0', border: 'none' }} />
                        <Botao type="submit">Verificar</Botao>
                    </Form>
                )}
            </FormContainer>
            
      </Container>
        </>
    );
};

export default Doe;
