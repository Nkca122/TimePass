const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

let port = 8000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, ()=>{
    console.log(`The server is on ${port}`);
});

//Homepage to select the tye of form

app.get("/form/new", (req, res)=>{
    res.render("home.ejs");
});

let Num;
let formType;

//To go to the new form

app.post("/form" ,(req,res)=>{
    let {num, type} = req.body;
    Num = Number(num);  formType = type;
    res.redirect("/form");
});

app.get("/form", (req, res)=>{
    res.render("form.ejs", {Num, formType});
});

app.post("/form/result", (req,res)=>{
    res.send(req.body);
    res.render("result.ejs");
    
});


