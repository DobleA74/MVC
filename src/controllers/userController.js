const users = require('../database/users');
const path = require('path');

const getAllUsers = (req, res)=>{
    res.render(path.join(__dirname,'../views/users'),{'allUsers':users})
}

const getUserId = (req, res)=>{
    const {id} = req.params;
    const user = users.find(elem => elem.id == id);
    if(user){
        res.render(path.join(__dirname,'../views/userDetail'),{user})
    }else{
        res.send("Not Found");
    }
    res.send(id);
}
const getUserByName = (req, res )=>{
    const {name} = req.params;
    const user = user.filter(elem => elem.name.includes(name));
    if(user.length){
        res.send(user);
    }else{
        res.send("Not Found");
    }
}

module.exports ={
    getAllUsers,
    getUserId, 
    getUserByName
};