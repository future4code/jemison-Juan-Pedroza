import express, { Request, Response } from "express"
import cors from 'cors'
import { todos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

type TODOS = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

app.get('/ping', (req: Request, res: Response) => {
    const bla = todos.filter((todo) => {
        if (todo.completed === false) {
            return todo
        }
    })
    res.send(bla)
})

app.post('/posting', (req: Request, res: Response) => {
    const postInfo:TODOS = req.body
    const postToAdd = req.headers.auth

    if(!postInfo || !postToAdd){
        res.status(400).send('deu ruim') 
    }

    res.status(200).send('resposta do servidor')
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})