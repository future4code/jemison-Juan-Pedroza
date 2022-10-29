import express, { Request, Response } from "express"
import cors from 'cors'
import {todos} from './data'

const app = express()

app.use(express.json())
app.use(cors())

type TODOS = {
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

app.get('/ping', (req: Request, res: Response) => {
    const filtraArray = () => {
        for ()
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});