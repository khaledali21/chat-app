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
    const user = req.body;
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
            data = {
                id: newUser._id,
                fName: newUser.fName,
                lName: newUser.lName
            };
            res.send({message:"Signed up", user: data});
        }
    });
})
app.post("/api/login", (req, res)=>{
    const user = req.body;
    console.log(user.email);
    User.findOne({email: user.email}, (err, foundUser)=>{
        if(err){
            res.send("wrong Email");
        }
        else{
            if(foundUser.password === user.password){
                res.write("Logged in");
                data = {
                    id: foundUser._id,
                    fName: foundUser.fName,
                    lName: foundUser.lName
                };
                res.send({message:"Logged in", user: data});
            }
            else{
                res.send({message: "wrong Password"});
            }
        }
    })
})

http.listen(5000, console.log("server listening on port 5000"));