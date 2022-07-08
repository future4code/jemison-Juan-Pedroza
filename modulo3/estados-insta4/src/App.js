import React, { useState } from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {

  const [inputNome, setInputNome] = useState('')
  const [inputFoto, setInputFoto] = useState('')
  const [inputPost, setInputPost] = useState('')
  const [listaPosts, setListaPosts] = useState([
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150',
    },
    {
      nomeUsuario: 'Juan',
      fotoUsuario: 'https://picsum.photos/50/52',
      fotoPost: 'https://picsum.photos/200/151',
    },
    {
      nomeUsuario: 'Rossana',
      fotoUsuario: 'https://picsum.photos/50/55',
      fotoPost: 'https://picsum.photos/200/155',
    },

  ])


  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputFoto = (e) => {
    setInputFoto(e.target.value)
  }
  const handleInputPost = (e) => {
    setInputPost(e.target.value)
  }

  const addPost = (e) => {
    e.preventDefault();
    const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputFoto, fotoPost: inputPost}
    const novaListaPosts = [...listaPosts, novoPost]
    setListaPosts(novaListaPosts)
  }

  const arrayLista = listaPosts.map((post, i) => {

    return (
      <Post key={i}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
      />
    )
  })

  return (
    <MainContainer>
      <form>
        <label> Nome: </label>
        <input value={inputNome} onChange={handleInputNome} type="text"/>
        <label> Foto Perfil </label>
        <input value={inputFoto} onChange={handleInputFoto} type="text"/>
        <label> Foto Post: </label>
        <input value={inputPost} onChange={handleInputPost} type="text"/>
        <button onClick={addPost}>Publicar</button>
      </form>
      {arrayLista}
    </MainContainer>
  )
}

export default App;
