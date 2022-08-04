import { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles'
import Inicial from './Components/Inicial';
import Matches from './Components/Matches';
import axios from 'axios';

function App() {

  const [pagina, setPagina] = useState("inicial")
  const [escolha, setEscolha] = useState()
  const [taMeQuerendo, setTaMeQuerendo] = useState()
  const [novoMatch, setNovoMatch] = useState([])
  const [perfis, setPerfis] = useState({})

  const url_matches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
  const url_choice = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'
  
  const [listaMatches, setListaMatches] = useState([])

  const body = {
    id: "Teste",
    choice: { escolha }
  }

  const GetProfileToChoose = () => {
    axios.get(url)
      .then((response) => {
        setPerfis(response.data.profile)
      })
      .catch((error) => console.log(error.response))
  }

  const ChoosePerson = () => {
    axios.post(url_choice, body)
      .then((response) => {
        setTaMeQuerendo(response.data.isMatch)
        console.log(response.data.isMatch)
      })
      .catch((error) => console.log(error.response))
  }

  const GetMatches = () => {
    axios.get(url_matches)
      .then((response) => {
        alert("Match Adicionado!")
        setListaMatches(response.data.matches)
        // if (escolha && taMeQuerendo) {
          
        // }
        console.log(response.data.matches)
        console.log(novoMatch)
      })
      .catch((error) => console.log(error.response))
  }

  const handlePageMatches = () => {
    setPagina("matches")
  }
  const handlePageInicio = () => {
    setPagina("inicial")
  }

  const handleTeste = (simounao) => {
    setEscolha(simounao)
    GetMatches()
    GetProfileToChoose()
    ChoosePerson()
  }

  useEffect(() => {
    GetProfileToChoose()
    ChoosePerson()
  }, [])

  switch (pagina) {
    case "inicial":
      return (
        <div>
          <GlobalStyle />
          <Inicial handlePageMatches={handlePageMatches} handleTeste={handleTeste} perfis={perfis} />
        </div>
      )
    case "matches":
      return (
        <div>
          <GlobalStyle />
          <Matches handlePageInicio={handlePageInicio} listaMatches={novoMatch} />
        </div>
      )
    default:
      console.log("Deu merda")
      break;
  }
}

export default App;