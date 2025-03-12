export default function putPropertyController(req, res) {
    return res.json({
        message: "Usuário alterado com sucesso", user:{
            name: "Kauan",
        email: "pinkFloyd@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}