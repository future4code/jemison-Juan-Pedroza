import React, { useState, useEffect } from "react";
import ListaUsuarios from "./Components/Usuarios/ListaUsuarios";
import AdicionarUsuario from './Components/Adicionar/AdicionarUsuario';
import axios from "axios";

function App() {

  const [foiTrocado, setFoiTrocado] = useState(false)
  const [users, setUsers] = useState([])

  const userPass = users

  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
  const serviceHeaders = { headers: { Authorization: "juan-pedroza-jemison" } }

  const getAllUsers = () => {
    axios.get(url, serviceHeaders)
        .then((response) => setUsers(response.data))
        .catch((error) => console.log(error.response))
}
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <button onClick={() => setFoiTrocado(!foiTrocado)}>Trocar de tela</button>
      {foiTrocado ? <ListaUsuarios url={url} serviceHeaders={serviceHeaders} getAllUsers={getAllUsers()} userPass={userPass} /> : <AdicionarUsuario url={url} serviceHeaders={serviceHeaders} />}
    </div>
  );
}

export default App;
