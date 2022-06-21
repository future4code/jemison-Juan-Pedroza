import perfil from './img/Juan.jpg';
import './App.css';

function App() {

  const onClickBotao = () => {
    alert(`Boa noite!`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá! Eu sou o Juan!</h1>
        <img src={perfil} className="foto-perfil" alt="perfil" />
        <p>
          Este é o meu primeiro site React
        </p>
        <button onClick={onClickBotao} className="aperte">
          Aperte este botão
        </button>
      </header>
    </div>
  );
}

export default App;