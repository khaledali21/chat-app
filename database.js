require('dotenv').config();
const user = process.env.USER;
const password = process.env.PASSWORD;
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://"+user+":"+password+"@cluster0.5kmrw.mongodb.net/chatAppDB?retryWrites=true&w=majority",  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
mongoose.set('useFindAndModify', false);

const userSchema = new mongoose.Schema({
    fName:{
        type: String,
        required: [true, "Please insert your First Name."] 
    },
    lName:{
        type: String,
        required: [true, "Please insert your Last Name."] 
    },
    email:{
        type: String,
        required: [true, "Please insert your Email."] 
    },
    password:{
        type: String,
        required: [true, "Please insert your Password."] 
    },
    contacts:[]
});
const User = mongoose.model('user', userSchema);
module.exports = User;