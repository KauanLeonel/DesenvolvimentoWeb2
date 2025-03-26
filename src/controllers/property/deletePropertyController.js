import { remove } from "../../models/propertyModel.js";

export default async function deletePropertyController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}