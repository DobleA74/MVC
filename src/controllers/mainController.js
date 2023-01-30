
const index = (req, res)=>{
    res.send ('<h1> Bienvenido a la app mvc </h1>')
}

const about = (req, res)=>{
    res.send ('<h1> Somos about ...</h1>')
}

module.exports = {
    index,
    about
};