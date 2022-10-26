import express, { Request, Response } from "express"
import cors from 'cors'
import {users} from './data'

const app = express()

app.use(express.json())
app.use(cors())

type Person = {
    id:number,
    name:string,
    phone:string,
    email:string,
    website:string
}

app.get("/sadasd", (req: Request, res: Response) => {
    const userInfo = users.map((user:Person) => {
        return user.name
    })
    res.status(200).send(userInfo)

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});