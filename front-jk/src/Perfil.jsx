import HeaderLogado from "./components/HeaderLogado/HeaderLogado";
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "./AuthContext";
import styles from './Perfil.module.css';
import imgPerfil from './img/perfil.jpg';
import { FaEdit, FaEnvelope, FaArrowLeft, FaUser, FaSignOutAlt, FaPhone, FaCheck, FaTimes, FaTrash, FaPlus } from 'react-icons/fa';
import api from "./api";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Perfil() {

  const { logout } = useContext(AuthContext);
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [dados, setDados] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChamado, setSelectedChamado] = useState(null);

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedChamado2, setSelectedChamado2] = useState(null);

  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [selectedChamado3, setSelectedChamado3] = useState(null);

  const [isModalOpenVideos, setIsModalOpenVideos] = useState(false);
  const [selectedChamadoVideos, setSelectedChamadoVideos] = useState(null);

  const [isAdicionarOpen, setAdicionarOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAdicionar = () => {
    setAdicionarOpen(true);
  };

  const openModal2 = () => {
    setIsModalOpen2(true);
  };
  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  const openModalVideos = () => {
    setIsModalOpenVideos(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedChamado(null);
  };
  const closeModal2 = () => {
    setIsModalOpen2(false);
    setSelectedChamado2(null);
  };
  const closeModal3 = () => {
    setIsModalOpen3(false);
    setSelectedChamado3(null);
  };
  const closeModal4 = () => {
    setAdicionarOpen(false);
  };
  const closeModalVideos = () => {
    setIsModalOpenVideos(false);
  };

  const selectChamado = (chamado) => {
    setSelectedChamado(chamado);
  };
  const selectChamado2 = (pedidoOracao) => {
    setSelectedChamado2(pedidoOracao);
  };
  const selectChamado3 = (postagem) => {
    setSelectedChamado3(postagem);
  };
  const selectChamadoVideos = (videos) => {
    setSelectedChamadoVideos(videos);
  };

  const goBackToList = () => {
    setSelectedChamado(null);
  };
  const goBackToList2 = () => {
    setSelectedChamado2(null);
  };
  const goBackToList3 = () => {
    setSelectedChamado3(null);
  };
  const goBackToListVideos = () => {
    setSelectedChamadoVideos(null);
  };
  const goBackToPostagem = () => {
    setAdicionarOpen(null);
  };

  function abrirCadastroPost() {
    closeModal3();
    openAdicionar();
  }

  function voltarNoCardPost() {
    closeModal4();
    openModal3();
  }

  const videos = [{ titulo: " 1", link: "https://www.youtube.com/watch?v=ZMCLyv_j8oQ&list=RDoxzrIHXo-ug&index=8" },
  { titulo: " 2", link: "https://www.youtube.com/watch?v=ZMCLyv_j8oQ&list=RDoxzrIHXo-ug&index=8" },
  { titulo: " 3", link: "https://www.youtube.com/watch?v=ZMCLyv_j8oQ&list=RDoxzrIHXo-ug&index=8" }

  ];

  const [dado, setDado] = useState({
    usuario: {
      nome: "Bartolomeu de Pompeia",
      email: "Bart@pbvm.com",
      idade: 27,
      imagemPerfil: imgPerfil,
      telefone: '11999999999',
      genero: 'Masculino',
      receberDoacao: false,
      familia: 'Pompeia',
    },
    endereco: {
      cep: "00000-000",
      rua: "Rua das Maria",
      numero: "25",
      bairro: "Amelias",
      cidade: "São Paulo",
      uf: "SP",
      complemento: "Apto 101"
    },
    kpis: [
      { label: "Chamados abertos alteração de endereço", valor: 2 },
      { label: "Pedidos de oração", valor: 15 },
      { label: "Postagens", valor: 5 },
      { label: "Editar Recomendações de Vídeos", valor: "" },
      // { label: "Indicações de louvores", valor: 5 }
    ]
  });

  const postagens = [
    {
      id: 1, titulo: 'Natal', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    }, {
      id: 2, titulo: 'pascoa', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    }, {
      id: 3, titulo: 'ano novo', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    },
    {
      id: 1, titulo: 'Natal', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    }, {
      id: 2, titulo: 'pascoa', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    }, {
      id: 3, titulo: 'ano novo', descricao: "natal na nossa igreja papapdsajd sabdkajd", data: "22/04"
    }
  ];

  const chamados = [
    {
      nome: 'Maria Silva',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    }, {
      nome: 'Joao Silva bbzao',
      email: 'exemplo@gmail.com',
      telefone: '11933923464',
      enderecoAnterior: {
        cep: '00000-000',
        rua: 'Rua das Maria',
        numero: '123',
        bairro: 'Amelias',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Apto 45'
      },
      novoEndereco: {
        cep: '11111-111',
        rua: 'Rua B',
        numero: '456',
        bairro: 'Jardins',
        cidade: 'São Paulo',
        uf: 'SP',
        complemento: 'Casa'
      }
    },
  ];
  const pedidoOracao = [
    { nome: 'arthur zezin', email: 'exemplo@gmail.com', telefone: '11933923464', pedido: "Peço oração pela minha saúde, pois estou passando por um tratamento e enfrentando dificuldades físicas e emocionais. Que Deus me dê força para enfrentar esse processo e me restaure. Agradeço por todas as orações e pela presença de Deus na minha vida." },
    { nome: 'arthur bb', pedido: "Peço oração pela minha saúde, pois estou passando por um tratamento e enfrentando dificuldades físicas e emocionais. Que Deus me dê força para enfrentar esse processo e me restaure. Agradeço por todas as orações e pela presença de Deus na minha vida." },
    { nome: 'arthur zeaszin', pedido: "Peço oração pela minha saúde, pois estou passando por um tratamento e enfrentando dificuldades físicas e emocionais. Que Deus me dê força para enfrentar esse processo e me restaure. Agradeço por todas as orações e pela presença de Deus na minha vida." },
    { nome: 'arthur zezidn', pedido: "Peço oração pela minha saúde, pois estou passando por um tratamento e enfrentando dificuldades físicas e emocionais. Que Deus me dê força para enfrentar esse processo e me restaure. Agradeço por todas as orações e pela presença de Deus na minha vida." },
    { nome: 'arthur zezidddn', pedido: "Peço oração pela minha saúde, pois estou passando por um tratamento e enfrentando dificuldades físicas e emocionais. Que Deus me dê força para enfrentar esse processo e me restaure. Agradeço por todas as orações e pela presença de Deus na minha vida." },
  ]

  const postagem = [{
    id: 1, titulo: "campanha arroz",
  }]
  const [isOn, setIsOn] = useState(false);

  const handleKpiClick = (kpi) => {
    switch (kpi.label) {
      case "Chamados abertos alteração de endereço":
        console.log("Chamados abertos alteração de endereço");
        openModal();
        break;
      case "Pedidos de oração":
        console.log("Pedidos de oração");
        openModal2()
        break;
      case "Postagens":
        console.log("Postagens da semana");
        openModal3();
        break;
      case "Editar Recomendações de Vídeos":
        console.log("Editar Recomendações de Vídeos");
        openModalVideos();
        break;

      default:
        console.log("KPI desconhecido");
    }
  };

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  const handleToggle = () => {
    setIsOn(prev => !prev);
  };
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await api.get(`/usuarios/${userId}`, {
  //         headers: { 
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       console.log(response.data);
  //       const userData = response.data;
  //       setDados({
  //         usuario: {
  //           nome: userData.nome,
  //           email: userData.email,
  //           data_nascimento: userData.data_nascimento,
  //           idade: calcularIdade(userData.data_nascimento),
  //           genero: userData.genero,
  //           telefone: userData.telefone,
  //           receber_doacoes: userData.receber_doacoes,
  //         },
  //         endereco: {
  //           cep: userData.endereco.cep,
  //           logradouro: userData.endereco.logradouro,
  //           numero: userData.endereco.numero,
  //           complemento: userData.endereco.complemento,
  //           bairro: userData.endereco.bairro,
  //           localidade: userData.endereco.localidade,
  //           uf: userData.endereco.uf,
  //         },
  //         kpis: [
  //           { label: "Chamados abertos alteração de endereço", valor: 2 },
  //           { label: "Pedidos de oração", valor: 15 },
  //           { label: "Postagens da semana", valor: 5 },
  //         ]
  //       });

  //     } catch (error) {
  //       console.error('Erro ao buscar dados do usuário', error);
  //     }
  //   };
  //   fetchUserData();
  // }, [userId, token]);

  const [editandoEndereco, setEditandoEndereco] = useState(false);
  const [editandoDadosPessoais, setEditandoDadosPessoais] = useState(false);
  const [imagemPerfil, setImagemPerfil] = useState(dado.usuario.imagemPerfil);

  useEffect(() => {
    setDados(dado);
  }, []);

  if (!dados) return <p>Carregando...</p>;

  const { usuario, endereco, kpis } = dados;

  const handleEnderecoChange = (field, value) => {
    setDados({
      ...dados,
      endereco: { ...endereco, [field]: value }
    });
  };

  const alternarEdicaoEndereco = () => setEditandoEndereco(!editandoEndereco);
  const alternarEdicaoDadosPessoais = () => setEditandoDadosPessoais(!editandoDadosPessoais);

  const deslogar = () => {
    console.log("Usuário deslogado");
    logout();
  };

  const cancelarEdicaoEndereco = () => {
    setEditandoEndereco(false);
    setDados(dado); // Restaura os dados originais ao cancelar
  };
  const cancelarEdicaoDadosPessoais = () => {
    setEditandoDadosPessoais(false);
    setDados(dado); // Restaura os dados originais ao cancelar
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPerfil(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const resetarImagemPerfil = () => {
    setImagemPerfil(dado.usuario.imagemPerfil);
  };


  return (
    <>
      <HeaderLogado />
      <div className={styles.perfilContainer}>
        <div className={styles.perfilSidebar}>
          <img src={imagemPerfil} alt="Perfil" className={styles.perfilImagem} />

          <div className={styles.dadosPessoais}>
            {editandoDadosPessoais && (
              <div className={styles.botoesImagemPerfil}>
                <button onClick={resetarImagemPerfil} className={styles.btnTirarFoto}>
                  Remover Foto
                </button>
                <label htmlFor="fileInput" className={styles.btnAdicionarImagem}>
                  Alterar foto
                </label>
              </div>
            )}
            {editandoDadosPessoais ? (
              <>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaUser />  Nome</div>
                  <label>
                    <input
                      type="text"
                      value={usuario.nome}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, nome: e.target.value } })}
                      placeholder="Nome"
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaEnvelope />  E-mail</div>
                  <label>
                    <input
                      type="text"
                      value={usuario.email}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, email: e.target.value } })}
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaPhone />  Telefone</div>
                  <label>
                    <input
                      type="number"
                      value={usuario.telefone}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, telefone: e.target.value } })}
                      placeholder="Telefone"
                    />
                  </label>
                </div>
                <h4>Precisa receber cesta básica ?</h4>
                <div className={styles.box}>
                  <div className={styles.inputContainer}>
                    <label>
                      <div className={styles.toggleContainer} onClick={handleToggle}>
                        <div className={`${styles.toggleButton} ${isOn ? styles.on : styles.off}`}>
                          <div className={styles.toggleCircle}></div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaUser />  Nome</div>
                  <label>
                    <input
                      type="text"
                      value={usuario.nome}
                      className={styles.inputDesabilitado}
                      readOnly
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaEnvelope />  E-mail</div>
                  <label>
                    <input
                      type="text"
                      value={usuario.email}
                      className={styles.inputDesabilitado}
                      readOnly
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaPhone />  Telefone</div>
                  <label>
                    <input
                      type="number"
                      value={usuario.telefone}
                      className={styles.inputDesabilitado}
                      readOnly
                    />
                  </label>
                </div>
                <h4>Precisa receber cesta básica ?</h4>
                <div className={styles.box}>
                  <div className={styles.inputContainer}>
                    <div className={styles.toggleContainerOff}>
                      <div className={`${styles.toggleButton} ${isOn ? styles.on : styles.off}`}>
                        <div className={styles.toggleCircle}></div>
                      </div>
                    </div>
                  </div>
                </div>

              </>
            )}
          </div>

          <div className={styles.botoesAcoes}>
            <button onClick={alternarEdicaoDadosPessoais} className={styles.btnEditar}>
              {editandoDadosPessoais ? (
                <>
                  <FaEdit /> Salvar
                </>
              ) : (
                <>
                  <FaEdit /> Editar
                </>
              )}
            </button>
            <button onClick={editandoDadosPessoais ? cancelarEdicaoDadosPessoais : deslogar} className={styles.btnSair}>
              {editandoDadosPessoais ? (
                <>
                  Cancelar
                </>
              ) : (
                <>
                  <FaSignOutAlt></FaSignOutAlt> Sair
                </>
              )}
            </button>
          </div>
        </div>

        <div className={styles.perfilConteudo}>
          <div className={styles.enderecoContainer}>
            <h3>Endereço</h3>
            <div className={styles.enderecoGrid}>
              {Object.entries(endereco).map(([key, value]) => (
                <div key={key} className={styles.enderecoCampo}>
                  <label>{key.toUpperCase()}</label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleEnderecoChange(key, e.target.value)}
                    readOnly={!editandoEndereco}
                    className={editandoEndereco ? styles.inputEditando : styles.inputDesabilitado}
                  />
                </div>
              ))}
            </div>
            <div className={styles.botoesContainer}>
              {editandoEndereco ? (
                <>
                  <button onClick={alternarEdicaoEndereco} className={styles.btnSalvar}>
                    Solicitar Alteração
                  </button>
                  <button onClick={cancelarEdicaoEndereco} className={styles.btnCancelar}>
                    Cancelar
                  </button>
                </>
              ) : (
                <button onClick={alternarEdicaoEndereco} className={styles.btnEditarEndereco}>
                  <FaEdit />
                </button>
              )}
            </div>
          </div>
          {/* <div className={styles.enderecoContainer}>
            <h3><center>Sua Família: <b>{usuario.familia}</b> </center></h3>
            <div className={styles.enderecoGrid}>
             
            </div>
            <div className={styles.botoesContainer}>
              {editandoEndereco ? (
                <>
                  <button onClick={alternarEdicaoEndereco} className={styles.btnSalvar}>
                    Solicitar Alteração
                  </button>
                  <button onClick={cancelarEdicaoEndereco} className={styles.btnCancelar}>
                    Cancelar
                  </button>
                </>
              ) : (
                <button onClick={alternarEdicaoEndereco} className={styles.btnEditarEndereco}>
                  <FaEdit />
                </button>
              )}
            </div>
          </div> */}

          <div className={styles.kpiContainer}>
            {dado.kpis.map((kpi, index) => (
              <div
                className={styles.kpiCard}
                key={index}
                onClick={() => handleKpiClick(kpi)}
              >
                <p>{kpi.label}</p>
                <h2>{kpi.valor}</h2>
              </div>
            ))}
          </div>

          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button onClick={closeModal} className={styles.closeModalButton}>
                  <span className={styles.closeIcon}>×</span>
                </button>

                {selectedChamado ? (
                  <>
                    <div className={styles.headerFixo}>
                      <button onClick={goBackToList} className={styles.backButton}>
                        <FaArrowLeft></FaArrowLeft>
                        <i className="fa fa-arrow-left" />
                      </button>
                      <h3>{selectedChamado.nome}</h3>
                    </div>

                    {/* Dados de Contato */}
                    <div className={styles.contactContainer}>
                      <div className={styles.contactInfo}>
                        <p><strong><FaEnvelope /> </strong> {selectedChamado.email}</p>
                      </div>
                      <div className={styles.contactInfo}>
                        <p><strong><FaPhone></FaPhone></strong> {selectedChamado.telefone}</p>
                      </div>
                    </div>
                    <div>
                    <div style={{ overflowY: 'scroll', height: '80%', display:"flex",justifyContent: "space-evenly"
}}>

                      {/* Endereço Anterior */}
                      <div className={styles.selectedChamado}>
                        <p><strong>Endereço Anterior:</strong></p>
                        <p><strong>CEP:</strong> {selectedChamado.enderecoAnterior.cep}</p>
                        <p><strong>Rua:</strong> {selectedChamado.enderecoAnterior.rua}</p>
                        <p><strong>Número:</strong> {selectedChamado.enderecoAnterior.numero}</p>
                        <p><strong>Bairro:</strong> {selectedChamado.enderecoAnterior.bairro}</p>
                        <p><strong>Cidade:</strong> {selectedChamado.enderecoAnterior.cidade}</p>
                        <p><strong>UF:</strong> {selectedChamado.enderecoAnterior.uf}</p>
                        <p><strong>Complemento:</strong> {selectedChamado.enderecoAnterior.complemento}</p>
                      </div>

                      {/* Novo Endereço */}
                      <div className={styles.selectedChamado}>
                        <p><strong>Novo Endereço:</strong></p>
                        <p><strong>CEP:</strong> {selectedChamado.novoEndereco.cep}</p>
                        <p><strong>Rua:</strong> {selectedChamado.novoEndereco.rua}</p>
                        <p><strong>Número:</strong> {selectedChamado.novoEndereco.numero}</p>
                        <p><strong>Bairro:</strong> {selectedChamado.novoEndereco.bairro}</p>
                        <p><strong>Cidade:</strong> {selectedChamado.novoEndereco.cidade}</p>
                        <p><strong>UF:</strong> {selectedChamado.novoEndereco.uf}</p>
                        <p><strong>Complemento:</strong> {selectedChamado.novoEndereco.complemento}</p>
                      </div>

                    </div>
                      <div className={styles.buttonsContainer}>
                        <button className={styles.acceptButton} onClick={goBackToList}>
                          <FaCheck />
                        </button>
                        <button className={styles.rejectButton} onClick={goBackToList}>
                          <FaTimes />
                        </button>
                      </div>
                      </div>
                  </>
                ) : (
                  // Se nenhum chamado for selecionado, exibe a lista de chamados
                  <>
                    <h3>Chamados para Troca de Endereço</h3>
                    <ul style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "31vh" }}>
                      {chamados.map((chamado, index) => (
                        <li
                          key={index}
                          onClick={() => selectChamado(chamado)} // Ao clicar, chama a função selectChamado
                          className={styles.chamadoItem}
                        >
                          {chamado.nome}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {isModalOpen2 && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button onClick={closeModal2} className={styles.closeModalButton}>
                  <span className={styles.closeIcon}>×</span>
                </button>

                {selectedChamado2 ? (
                  <>
                    <div className={styles.headerFixo}>
                      <button onClick={goBackToList2} className={styles.backButton}>
                        <FaArrowLeft />
                        <i className="fa fa-arrow-left" />
                      </button>
                      <h3>{selectedChamado2.nome}</h3>
                    </div>

                    {/* Dados de Contato */}
                    <div className={styles.contactContainer}>
                      <div className={styles.contactInfo}>
                        <p><strong><FaEnvelope /> </strong> {selectedChamado2.email}</p>
                      </div>
                      <div className={styles.contactInfo}>
                        <p><strong><FaPhone></FaPhone></strong> {selectedChamado2.telefone}</p>
                      </div>
                    </div>

                    <div style={{ overflowY: 'scroll', height: '80%' }}>
                      <div className={styles.selectedChamado}>
                        <p>{selectedChamado2.pedido}</p>
                      </div>

                      <div className={styles.buttonsContainer}>
                        <button className={styles.acceptButton} onClick={goBackToList2}>
                          Manter
                        </button>
                        <button className={styles.rejectButton} onClick={goBackToList2}>
                          Excluir
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>Pedidos de oração</h3>
                    <ul style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "31vh" }}>
                      {pedidoOracao.map((pedidoOracao, index) => (
                        <li
                          key={index}
                          onClick={() => selectChamado2(pedidoOracao)}
                          className={styles.chamadoItem}
                        >
                          {pedidoOracao.nome}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          )}

          {isModalOpen3 && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button onClick={closeModal3} className={styles.closeModalButton}>
                  <span className={styles.closeIcon}>×</span>
                </button>

                {selectedChamado3 ? (
                  <>
                    <div className={styles.headerFixo}>
                      <button onClick={goBackToList3} className={styles.backButton}>
                        <FaArrowLeft />
                        <i className="fa fa-arrow-left" />
                      </button>
                    </div>
                    <div style={{ overflowY: 'scroll', height: '0%' }}>

                      <div className={styles.inputContainer}>
                        <div className={styles.iconContainer}>Título</div>
                        <label>
                          <input
                            type="text"
                            value={selectedChamado3.titulo}
                            className={styles.inputDesabilitado}
                            readOnly
                          />
                        </label>
                        <div className={styles.iconContainer}>Descricao</div>
                        <label>
                          <input
                            type="text"
                            value={selectedChamado3.descricao}
                            className={styles.inputDesabilitado}
                            readOnly
                          />
                        </label>
                        <div className={styles.iconContainer}>Data</div>
                        <label>
                          <input
                            type="text"
                            value={selectedChamado3.data}
                            className={styles.inputDesabilitado}
                            readOnly
                          />
                        </label>
                      </div>
                      {/* <div className={styles.selectedChamado}>
                      <p>Título: {selectedChamado3.titulo}</p>
                      <p>{selectedChamado3.descricao}</p>
                      <p>{selectedChamado3.data}</p>
                      </div> */}

                      <div className={styles.buttonsContainer}>
                        <button className={styles.btnEditar} onClick={goBackToList3}>
                          <FaEdit />
                        </button>
                        <button className={styles.btnSair} onClick={goBackToList3}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>Postagens</h3>
                    <ul
                      style={{
                        overflowX: "hidden",
                        overflowY: "scroll",
                        maxHeight: "26vh",
                        marginTop: "5px",
                      }}
                    >
                      {postagens.map((postagens, index) => (
                        <li key={index} className={styles.chamadoItem}style={{
                          cursor:"default"
                        }}>
                          <span>{postagens.titulo}</span>
                          <span>{" - " + postagens.data}</span>
                          <button className={styles.deleteButton}>
                            <FaTrash />
                          </button>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.boxAdicionarPostagem}>
                      <button className={styles.acceptButton} onClick={() => abrirCadastroPost()}> Adicionar</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {isAdicionarOpen && (
            <>
              <div className={styles.modal}>
                <div className={styles.modalContent2}>
                  <div className={styles.headerFixo}>
                    <button onClick={() => voltarNoCardPost()} className={styles.backButton}>
                      <FaArrowLeft />
                    </button>
                  </div>
                  <div className={styles.formContent}>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Título</label>
                      <input type="text" className={styles.inputField} placeholder="Digite o título do evento" />
                    </div>
                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Imagem</label>
                      <input
                        type="file"
                        accept="image/*" // Restrição para permitir apenas imagens
                        className={styles.inputField}
                        onChange={handleImageChange} // Função para manipular a imagem selecionada
                      />
                      <div className={styles.imagePreview}>
                        {/* {<img src={image} alt="Preview" className={styles.previewImage} />} */}
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <label className={styles.inputLabel}>Data</label>
                      <input type="date" className={styles.inputField} />
                    </div>
                    <div className={styles.buttonsContainer}>
                      <button className={styles.btnAdicionarImagem}>
                        Criar evento
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {isModalOpenVideos && (
            <div className={styles.modal}>
              <div className={styles.modalContent}>
                <button onClick={closeModalVideos} className={styles.closeModalButton}>
                  <span className={styles.closeIcon}>×</span>
                </button>

                {selectedChamadoVideos ? (
                  <>
                    <div className={styles.headerFixo}>
                      <button onClick={goBackToListVideos} className={styles.backButton}>
                        <FaArrowLeft />
                        <i className="fa fa-arrow-left" />
                      </button>
                      <h3>{selectChamadoVideos.titulo}</h3>
                    </div>

                    <div style={{ overflowY: 'scroll', height: '60%' }}>
                      <b> <p className={{}}>{"Vídeo" + selectedChamadoVideos.titulo}</p></b>

                      {/* <p className={styles.espacoP}>Link:</p> */}
                      <input
                        type="text"
                        defaultValue={selectedChamadoVideos.link}
                        className={styles.linkVideo}
                        style={{ height: '50%', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: "30px" }}
                        placeholder="Insira o link do vídeo desejado ..."
                      />


                    </div>
                    <div className={styles.buttonsContainer}>
                      <button className={styles.acceptButton} onClick={goBackToListVideos}>
                        <FaCheck></FaCheck>
                      </button>
                      <button className={styles.rejectButton} onClick={goBackToListVideos}>
                        <FaTrash></FaTrash>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>Vídeos</h3>
                    <ul style={{ overflowX: "hidden", overflowY: "scroll", maxHeight: "31vh" }}>
                      {videos.map((videos, index) => (
                        <li
                          key={index}
                          onClick={() => selectChamadoVideos(videos)}
                          className={styles.chamadoItem}
                        >
                          {videos.titulo}
                        </li>
                      ))}
                    </ul>
                  </>

                )}
              </div>
            </div>
          )}


        </div>
      </div>
    </>
  );
}

export default Perfil;
