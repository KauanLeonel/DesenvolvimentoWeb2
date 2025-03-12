export default function getUserController(req, res) {
    res.json({
        message: "Usuário criado com sucesso", user:{
            name: "Kauan",
        email: "pinkFloyd@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}