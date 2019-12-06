const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    mail: {type: String, required: true},
    ph_entry: [{
        height: {type: Number, required: true},
        weight: {type: Number, required: true},
        age: {type: Number, required: true}
    }],
    lifts: [{
        bench: {type: Number, required: true},
        squat: {type: Number, required: true},
        deadlift: {type: Number, required: true},
        ohp: {type: Number, required: true},
        bbrow: {type: Number, required: true},
        pullup: {type: Number, required: true}
    }]
})

module.exports = mongoose.model('User', UserSchema);