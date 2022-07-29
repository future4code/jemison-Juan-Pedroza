import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from './../constantes';

function ListaUsuarios() {
    const [users, setUsers] = useState([])
    const [inputName, setinputName] = useState("");
    const [inputEmail, setinputEmail] = useState("");
    const [inputBusca, setInputBusca] = useState("")
    const [buscaArray, setBuscaArray] = useState([])

    console.log()
    const handleInputName = (e) => {
        setinputName(e.target.value)
    }
    const handleInputEmail = (e) => {
        setinputEmail(e.target.value)
    }
    const handleInputBusca = (e) => {
        setInputBusca(e.target.value)
    }

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    const urlBusca = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=' + `${inputBusca}` + '&email='
    const serviceHeaders = { headers: { Authorization: "juan-pedroza-jemison" } }

    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error.response))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const body = {
        name: inputName,
        email: inputEmail
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

    const delUserName = users.filter((user, key) => {
        return (
            <div key={user.id}>   
                {user.name}
            </div>

        )
    })

    const deleteUser = (id) => {
        // e.preventDefault();

        axios.delete(url + "/" + delUserName, serviceHeaders)
            .then((response) => {
                alert("Usuário deletado com sucesso!")
                getAllUsers()
            }).catch((error) => {
                alert("Ocorreu um erro ao deletar. Tente novamente.")
            })
    }


    const allUsers = users.map((user, index) => {
        return (
            <li key={index}>
                {user.name}
                <button onClick={deleteUser}>X</button>
            </li>
        )
    })

    // const search = users.filter((user) => {
    //     setBuscaArray(user.name)
    // })

    const searchUsers = (e) => {
        e.preventDefault();

        axios.get(`${baseUrl}/search?name=${inputBusca}&email=`, serviceHeaders)
            .then((response) => {
                alert("Sucesso!")
            }).catch((response) => {
                alert("Não encontrei :(")
            })
        setInputBusca("")
        
    }
    

    return (
        <div>
            <div>
                <button>Trocar de tela</button>
            </div>
            <div>
                <ul>
                    {allUsers}
                </ul>
            </div>
            <hr />
            <div>
                <h4>Procurar usuário</h4>
                <div>
                    <input
                        type="text"
                        placeholder='Nome exato para busca'
                        value={inputBusca}
                        onChange={handleInputBusca}
                    />
                    <button onClick={searchUsers}>Salvar edição</button>
                </div>
            </div>
            <hr />
            <div>
                <button>Trocar de tela</button>
            </div>
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

export default ListaUsuarios