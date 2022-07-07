import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const arrayPostagem = [
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
    },
    {
      nomeUsuario: 'juan',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/200/151',
    },
    {
      nomeUsuario: 'rossana',
      fotoUsuario: 'https://picsum.photos/50/55',
      fotoPost: 'https://picsum.photos/200/155',
    },

  ]

  const teste = arrayPostagem.map((post) => {
    return (
      <div>
        <li>{post.nomeUsuario}</li>
        <li>{post.fotoUsuario}</li>
        <li>{post.fotoPost}</li>
      </div>
    )
  })

  return (
    <MainContainer>
      {teste}
    </MainContainer>
  )

}


export default App;
