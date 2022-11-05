import express from "express"
import cors from 'cors'
import { users } from "./data"

const app = express()
app.use(express.json())
app.use(cors())

// 1. metodo get, entidade "users"

type userTyped = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

app.get('/users', (req, res) =>{
    res.status(200).send(users)
})

//2.
app.get('/userTypedList', (req, res) => {
    const asdas = users.map((user) => {
        if(user.type === 'ADMIN'){
            return user
        }
    })
    res.status(200).send(asdas)
})

//3.
app.get('/busca', (req, res) =>{
    const nomeBuscado = 'Coragem'
    const asdas = users.map((user) => {
        if(user.name === nomeBuscado){
            return user
        }
    })
    res.status(200).send(asdas)
})

app.post('postUser', (req, res) =>{
    const newUser = req.body
    
    users.push(newUser)
    res.status(200).send(users)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});