import express, { Request, Response } from "express"
import cors from 'cors'
import { users, posts } from './data'

const app = express()

app.use(express.json())
app.use(cors())

type Person = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

type Post = {
    userID: number,
    id: number,
    title: string,
    body: string
}

app.get("/userInfo", (req: Request, res: Response) => {
    const userInfo = users.map((user: Person) => {
        return user.name
    })
    res.status(200).send(userInfo)
})

app.get("/posts", (req: Request, res: Response) => {
    const postInfo = posts.map((postIndividual) => {
        let arrayFiltrado = []
        if (postIndividual.userId === 1) {
            arrayFiltrado.push(postIndividual)
            return arrayFiltrado
        }
    })
    res.status(200).send(postInfo)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});