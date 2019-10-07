let Topic = require("../models/topicModel")

exports.list = function (req, res) {
    Topic.find((err,t)=>{
        return res.json(t);
    });
}

// exports.create = function create(req, res){
//     let user = new User({
//         name: req.body.name,
//         cart: []
//     })
//     user.save().then(savedUser =>{
//         console.log(savedUser)
//     })
// }

// exports.updateCart = function updateCart(req,res){
//     User.findByIdAndUpdate(req.body._id, req.body, (err, user)=>{
//         console.log(req.body._id)
//         return res.json(user);
//     })