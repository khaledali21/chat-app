const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const User = require('./database');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res)=> res.sendFile(__dirname+"/index.html"));
io.on('connection', socket=>{
    console.log('a user connected');
});

app.post('/api/signup', (req, res)=>{
    const {user} = req.body;
    console.log(user);
    const newUser = new User({
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        password: user.password
    });
    newUser.save((err)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send("Signed up");
        }
    })
})
app.post("/api/login", (req, res)=>{
    const {user} = req.body;
    User.findOne({email: user.email}, (foundUser, err)=>{
        if(err){
            res.send("wrong Email");
        }
        else{
            if(foundUser.password === user.password){
                res.send("Logged in");
            }
            else{
                res.send("wrong Password");
            }
        }
    })
})

http.listen(5000, console.log("server listening on port 5000"));