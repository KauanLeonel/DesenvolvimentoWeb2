import express from "express"
import userRouter from "./routes/userRouter.js"
import propertyRouter from "./routes/propertyRouter.js"
const app = express()
const port = 3000

//MidWare
app.use(express.json()) //faz o parse do json e transforma em objeto no req.body

app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () =>{
    console.log(`Porta rodando`)
})