import express from "express"
import userRouter from "./routes/userRouter.js"
import propertyRouter from "./routes/propertyRouter.js"
import cors from "cors"

const app = express()
const port = 3000

//MidWare
app.use(cors()) //Libera o cors para o navegador 
app.use(express.json()) //faz o parse do json e transforma em objeto no req.body

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () =>{
    console.log(`Porta rodando`)
})