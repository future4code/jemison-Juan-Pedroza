import { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles'
import Inicial from './Components/Inicial';
import Matches from './Components/Matches';
import axios from 'axios';

function App() {

  const [pagina, setPagina] = useState("inicial")
  const [taMeQuerendo, setTaMeQuerendo] = useState()
  const [perfis, setPerfis] = useState({})
  const [listaMatches, setListaMatches] = useState([])

  const url_matches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
  const url_choice = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'
  const url_clear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear'
  
  const body = {
    id: perfis.id,
    choice: true
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
        console.log(response.data.isMatch)
        setTaMeQuerendo(response.data.isMatch)
      })
      .catch((error) => console.log(error.response))
  }

  const GetMatches = () => {
    axios.get(url_matches)
      .then((response) => {
        console.log(taMeQuerendo)
        if (taMeQuerendo){
          alert("Match Adicionado!")
          setListaMatches(response.data.matches)
        }
      })
      .catch((error) => console.log(error.response))
  }

  const Clear = () => {
    axios.put(url_clear, body)
    .then((response) => {
      setListaMatches([])
      alert("Lista de Matches apagada!")
    })
    .catch((error) => console.log(error.response))
  }

  const handlePageMatches = () => {
    setPagina("matches")
  }
  const handlePageInicio = () => {
    setPagina("inicial")
  }

  const handleTeste = () => {
    GetProfileToChoose()
    ChoosePerson()
    GetMatches()
  }

  useEffect(() => {
    GetProfileToChoose()
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
      console.log("Deu erro")
      break;
  }
}

export default App;