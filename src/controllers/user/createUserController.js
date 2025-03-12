export default function createUserController(req, res) {
    return res.json({
        name: "Kauan",
        email: "pinkFloyd@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
    })
}