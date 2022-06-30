import React, { useState } from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkPlusFill } from "react-icons/bs";


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

function Post(props) {
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentario, setComentario] = useState('')
  const [marcado, setMarcado] = useState(false)
  const [compartilhado, setCompartilhado] = useState(false)

  let escreverComentario

  const onClickCurtida = () => {
    console.log('Curtiu!')
    setCurtido(true)
    setnumeroCurtidas(numeroCurtidas + 1)

    if (curtido === true) {
      setCurtido(false)
      console.log('Descurtiu.')
      setnumeroCurtidas(numeroCurtidas - 1)
    }
  }

  const onClickComentario = () => {
    setComentando(!comentando)
    if (comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
      escreverComentario = <SecaoComentario onChangeComentario={mandarComentario} />
    }
    console.log(comentando)
  }

  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }

  let mandarComentario = (event) => {
    setComentario(event.target.value)
  }

  let clicarMarcou = () => {
    setMarcado(true)

    if (marcado === true) {
      setMarcado(false)
    }
  }

  let compartilhou = () => {
    setCompartilhado(true)

    //implementar logica de aparecer redes sociais
  }

  let iconeCurtida

  if (curtido) {
    iconeCurtida = iconeCoracaoPreto
  } else {
    iconeCurtida = iconeCoracaoBranco
  }

  let iconeMarcado 

  if (marcado) {
    iconeMarcado = <BsBookmarkPlusFill onClick={clicarMarcou}/>
  } else {
    iconeMarcado = <BsBookmarkPlus onClick={clicarMarcou}/>
  }

  let componenteComentario

  if (comentando) {
    componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} />
  }

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

      <div>
        {iconeMarcado}
      </div>  

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
}
export default Post