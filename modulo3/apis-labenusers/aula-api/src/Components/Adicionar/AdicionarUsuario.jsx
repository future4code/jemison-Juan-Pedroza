import React from 'react'

function AdicionarUsuario({setTela}) {
  return (
    <div>
      <button onClick={setTela("Usuário")}>Trocar de tela</button>
    </div>
  )
}

export default AdicionarUsuario