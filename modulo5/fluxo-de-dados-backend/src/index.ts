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

// app.post('/test', (req, res) => {
//     const newProduto = req.body
//     produtos.push(newProduto)

//     res.status(201).send(produtos)
// })

app.post('/test2', (req, res) => {
    const testeEdit = req.body.price
    produtos[2].price = testeEdit
    res.status(201).send(produtos)
})