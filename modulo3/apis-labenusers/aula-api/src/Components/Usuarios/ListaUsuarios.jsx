import { useState } from 'react'
import axios from 'axios'

function ListaUsuarios({ url, serviceHeaders, getAllUsers, userPass}) {

    const [inputBusca, setInputBusca] = useState("")

        const handleInputBusca = (e) => {
        setInputBusca(e.target.value)
    }

    const deleteUser = (id) => {
        axios.delete(url + "/" + id, serviceHeaders)
            .then((response) => {
                alert("Usuário deletado com sucesso!")
                getAllUsers()
            }).catch((error) => {
                alert("Ocorreu um erro ao deletar. Tente novamente.")
            })
    }

    const allUsers = userPass.map((user, index) => {
        return (
            <li key={index}>
                {user.name}
                <button onClick={() => deleteUser(user.id)}>X</button>
            </li>
        )
    })

    const searchUsers = (inpb) => {
        // const blabla = users.map((user) => {
        //     if (user.name === inpb) {
        //         return alert("Sucesso!")
        //     }
        // })

        // axios.get(urlBusca, serviceHeaders)
        //     .then((response) => {
        //         alert("Sucesso!")
        //     }).catch((response) => {
        //         alert("Não encontrei :(")
        //     })
        // setInputBusca("")
    }

    return (
        <div>
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
                    <button onClick={() => searchUsers(inputBusca)}>Salvar edição</button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ListaUsuarios