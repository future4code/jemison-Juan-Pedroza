import { useState, useEffect } from 'react';
import GlobalStyle from './globalStyles'
import Inicial from './Components/Inicial';
import Matches from './Components/Matches';
import axios from 'axios';

function App() {

  const [pagina, setPagina] = useState("inicial")
  const [escolha, setEscolha] = useState("")
  const [taMeQuerendo, setTaMeQuerendo] = useState()
  const [listaMatches, setListaMatches] = useState([])
  const [perfis, setPerfis] = useState({})


  const url_matches = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches'
  const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
  const url_choice = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person'

    const body = {
        id: "teste",
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
            setTaMeQuerendo(response.data.isMatch)
            console.log(response.data)
        })
        .catch((error) => console.log(error.response))
}

  const GetMatches = () => {
    axios.get(url_matches)
    .then((response) => {
        alert("Match Adicionado!")
        setListaMatches(perfis)
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
  if (escolha === "sim" && taMeQuerendo) {
    GetMatches()
  }
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
          <Inicial handlePageMatches={handlePageMatches} handleTeste={handleTeste} setTaMeQuerendo={setTaMeQuerendo} perfis={perfis} />
        </div>
      )
    case "matches":
      return (
        <div>
          <GlobalStyle />
          <Matches handlePageInicio={handlePageInicio} />
        </div>
      )
    default:
      console.log("Deu merda")
      break;
  }
}

export default App;