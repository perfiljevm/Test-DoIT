import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userShema =  new Schema({
    username:{ type: String, require:true}, 
    password: {type: String, require:true},
    locations:[{}]
})


const users = mongoose.model('users' , userShema);