import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    id: {type: String},
    pic: {type: String, required: false},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},

});

export default mongoose.model("User", userSchema)