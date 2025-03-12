export default function getPropertyController(req, res) {
    return res.json({
        id: 1,
        tipo: "aluguel",
        endereco: "sla, sla, sla",
        quartos: 3,
        propriedade: "casa"
    })
}