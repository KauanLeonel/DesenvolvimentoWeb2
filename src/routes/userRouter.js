import express from "express"
import getUserController from "../controllers/user/createUserController" //ERRO AQUi
import createUserController from "../controllers/user/createUserController" //ERRO AQUI
const router = express.Router()



router.get("/:id", createUserController)

router.post("/", getUserController)

router.put("/", (req, res) =>{
    res.json({
        message: "Usuário alterado com sucesso", user:{
            name: "Kauan",
        email: "pinkFloyd@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
})

router.delete("/", (req, res) =>{
    res.json({message: "Usuário deletado com sucesso"})
})


const obj = ["name", "email", "id", "avatar"]
for (let i = 0; i < obj.length; i++){
router.patch(`/${obj[i]}`, (req, res) =>{
    res.json({
        message: `${obj[i]} alterado`
         
    })
})}

export default router