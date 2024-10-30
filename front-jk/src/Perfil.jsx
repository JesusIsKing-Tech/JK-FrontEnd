import HeaderLogado from "./components/HeaderLogado/HeaderLogado";
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "./AuthContext";
import styles from './Perfil.module.css';
import imgPerfil from './img/perfil.jpg';
import { FaEdit, FaEnvelope, FaBirthdayCake, FaUser, FaSignOutAlt } from 'react-icons/fa'; // Importando o ícone de sair

function Perfil() {

  const { logout } = useContext(AuthContext);

  const dado = {
    usuario: {
      nome: "Bartolomeu de Pompeia",
      email: "Bart@pbvm.com",
      idade: 27,
      imagemPerfil: imgPerfil
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
      { label: "Postagens da semana", valor: 5 },
      { label: "Cestas básicas no estoque", valor: 5 },
      { label: "Indicações de louvores", valor: 5 }
    ]
  };

  const [dados, setDados] = useState(null);
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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className={styles.inputFile}
                  id="fileInput"
                />
                <label htmlFor="fileInput" className={styles.btnAdicionarImagem}>
                  Alterar foto
                </label>
              </div>
            )}
            {editandoDadosPessoais ? (
              <>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaUser /></div>
                  <label>
                    <input
                      type="text"
                      value={usuario.nome}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, nome: e.target.value }})}
                      placeholder="Nome"
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaEnvelope /></div>
                  <label>
                    <input
                      type="text"
                      value={usuario.email}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, email: e.target.value }})}
                      placeholder="Email"
                    />
                  </label>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaBirthdayCake /></div>
                  <label>
                    <input
                      type="number"
                      value={usuario.idade}
                      onChange={(e) => setDados({ ...dados, usuario: { ...usuario, idade: e.target.value }})}
                      placeholder="Idade"
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <div className={styles.inputContainer}>
                  <div className={styles.iconContainer}><FaUser /></div>
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
                  <div className={styles.iconContainer}><FaEnvelope /></div>
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
                  <div className={styles.iconContainer}><FaBirthdayCake /></div>
                  <label>
                    <input
                      type="number"
                      value={usuario.idade}
                      className={styles.inputDesabilitado}
                      readOnly
                    />
                  </label>
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
            <button onClick={deslogar} className={styles.btnSair}>
              <FaSignOutAlt /> Sair
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
          <div className={styles.kpiContainer}>
            {kpis.map((kpi, index) => (
              <div key={index} className={styles.kpiCard} onClick={() => console.log(`Redirecionar para ${kpi.label}`)}>
                <p>{kpi.label}</p>
                <h2>{kpi.valor}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
