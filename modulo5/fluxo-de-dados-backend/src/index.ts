import express from "express"
import cors from 'cors'
import { produtos } from "./data"

const app = express()
app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get('/test', (req, res) => {
    res.status(200).send(produtos)
})

app.post('/addproduto', (req, res) => {
    res.status(200).send('produtos')
})