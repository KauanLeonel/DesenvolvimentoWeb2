export default function createPropertyController(req, res) {

    const property = req.body;

    //todo valisar e inserir no BD
    return res.json({
        message: "imóvel criado com sucesso",
        property: property
    }
    )
}