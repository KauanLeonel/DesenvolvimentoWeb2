import { update } from "../../models/propertyModel.js"

export default async function putPropertyController(req, res) {
    const {id} = req.params
    const property = req.body

    const result = await update(+id, property);

    return res.json({
        message: "Usuário alterado com sucesso", user:{
            name: "Kauan",
        email: "pinkFloyd@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}