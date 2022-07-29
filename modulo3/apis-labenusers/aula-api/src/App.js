import React, { useState } from "react";
import ListaUsuarios from "./Components/Usuarios/ListaUsuarios";
import AdicionarUsuario from './Components/Adicionar/AdicionarUsuario';

function App() {

  // const [tela, setTela] = useState("")

  // const trocarTela = () => {
  //   if (tela === "Criar") {
  //     return (
  //       <div className="App">
  //         <ListaUsuarios setTela={setTela} />
  //       </div>
  //     )
  //   } if (tela === "Usuário") {
  //     return (
  //       <div className="App">
  //         <ListaUsuarios setTela={setTela} />
  //       </div>
  //     )
  //   }
  // }

  return (
    <div className="App">
      <ListaUsuarios />
    </div>
  );
}

export default App;
