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
  const url_clear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear'
  
  const [listaMatches, setListaMatches] = useState([])

  const body = {
    id: perfis.id,
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
        if (escolha && taMeQuerendo) {                             //se eu cliquei em sim e isMatch é true (adicionar na lista de matches e mostrar o alert)
          setListaMatches(...listaMatches, response.data.matches)
          alert("Match Adicionado!")
        }
        console.log(listaMatches)
      })
      .catch((error) => console.log(error.response))
  }

  const Clear = () => {
    axios.put(url_clear, body)
    .then((response) => setListaMatches([]))
    .catch((error) => console.log(error.response))
  }
  console.log(listaMatches)

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
    // GetMatches()
  }, [])

  switch (pagina) {
    case "inicial":
      return (
        <div>
          <GlobalStyle />
          <Inicial handlePageMatches={handlePageMatches} handleTeste={handleTeste} perfis={perfis} clear={Clear} />
        </div>
      )
    case "matches":
      return (
        <div>
          <GlobalStyle />
          <Matches handlePageInicio={handlePageInicio} listaMatches={listaMatches} />
        </div>
      )
    default:
      console.log("Deu merda")
      break;
  }
}

export default App;