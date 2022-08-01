import React, {useState} from 'react'
import axios from 'axios'

function AdicionarUsuario({url, serviceHeaders, getAllUsers}) {

  const [inputName, setinputName] = useState("");
  const [inputEmail, setinputEmail] = useState("");

  const body = {
    name: inputName,
    email: inputEmail
  }

  const handleInputName = (e) => {
    setinputName(e.target.value)
}
const handleInputEmail = (e) => {
    setinputEmail(e.target.value)
}

  const createUser = (e) => {
    e.preventDefault();

    axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário criado com sucesso!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente :(")
        })
    setinputName("")
    setinputEmail("")
}


  return (
    <div>
      <input
        type="text"
        placeholder='Nome'
        value={inputName}
        onChange={handleInputName}
      />
      <input
        type="text"
        placeholder='E-mail'
        value={inputEmail}
        onChange={handleInputEmail}
      />
      <button onClick={createUser}>Criar Usuário</button>
    </div>
  )
}

export default AdicionarUsuario