const express = require('express');
const mongoose = require('mongoose');
const Cards = require('./dbschema');
const cors = require('cors');
const app = express();
const connect_uri =
  "mongodb+srv://devanshtivari:devansh01@cluster0.icpzm.mongodb.net/tinder-clone?retryWrites=true&w=majority";

mongoose.connect(connect_uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());
app.use(cors());
app.get("/" , (req, res) => {
    res.status("200")
    res.send("Hello fuck!!")
})

app.post("/tinder/card" , (req,res) => {
    const {name,url,info} = req.body;

    console.log(name , url , info);

    if(name === undefined){
        res.status(500).send("Please enter all the feilds");
        return;
    }

    if(!name || !url || !info) {
        res.status(500).send("Please enter all the feilds")
        return;
    } 

    const user = Cards.create({
        name,url,info
    })

    if(user){
        res.status(201).send("User created successfully")
    }else{
        res.status(500).send("Error in creating user")
    }
});

app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(3000 , console.log("app is running at port 3000"))