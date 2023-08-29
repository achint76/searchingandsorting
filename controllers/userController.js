const userModel = require('../models/userModel');

function searchwithusertype(req,res) {
    const usertype = req.query.user_type;
userModel.searchwithusertype(usertype, (error,myusers)=>{
if(error)
res.status(500).json({ error: 'Error fetching users' });
else
res.status(200).json({message: 'work done successfully', user_type:myusers});
})
}

function sortbyname(req,res){
     const name = req.query.name;
userModel.sortbyname(name, (error,myusers)=>{
    if(error)
    res.status(500).json({error: 'Error fetching users'});
else
res.status(200).json({message :'success', name: myusers});
})
}

module.exports = {
searchwithusertype,
sortbyname
};