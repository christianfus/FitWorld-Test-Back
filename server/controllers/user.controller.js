const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers= async (req, res) => {
    const users = await User.find()
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    
    res.json({
        'status': 'Empleado guardado'
    }) ;   
}
userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.updateUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        username: req.body.username,
        password: req.body.password,
        mail: req.body.mail,
        ph_entry: req.body.ph_entry,
        lifts: req.body.lifts
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({'status':'User updated'});

}

userCtrl.deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json({'status':'User with id: '+req.params.id+' deleted.'});

}

module.exports = userCtrl;