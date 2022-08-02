import { useState } from 'react';
import GlobalStyle from './globalStyles'
import Inicial from './Components/Inicial';
import Matches from './Components/Matches';

function App() {

  const [pagina, setPagina] = useState("inicial")

  const handlePageMatches = () => {
    setPagina("matches")
  }
  const handlePageInicio = () => {
    setPagina("inicial")
  }



  switch (pagina) {
    case "inicial":
      return (
        <div>
          <GlobalStyle />
          <Inicial handlePageMatches={handlePageMatches} />
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