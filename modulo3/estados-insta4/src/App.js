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
  return (
    <MainContainer>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      <Post
        nomeUsuario={'juan'}
        fotoUsuario={'https://picsum.photos/50/52'}
        fotoPost={'https://picsum.photos/200/151'}
      />
      <Post
        nomeUsuario={'rossana'}
        fotoUsuario={'https://picsum.photos/50/55'}
        fotoPost={'https://picsum.photos/200/155'}
      />
    </MainContainer>
  )

}


export default App;
