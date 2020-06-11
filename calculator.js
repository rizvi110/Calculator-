const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/calc",function(req,res){
  res.sendFile(__dirname + "/calc.html");
});

app.post("/add",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send(String(result));
  console.log(req.body);
});

app.post("/sub",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1-num2;
    res.send(String(result));
  console.log(req.body);
});

app.post("/mult",function(req,res){
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1*num2;
    res.send(String(result));
  console.log(req.body);
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname +"/bmiCalculator.html")
});

app.post("/bmiCalculator",function(req,res){
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);
  var result = Math.round(weight/(height*height));
  console.log(result);
  res.send("Your BMI is " +String(result));
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port,function(){
  console.log("server started on port 3000");
});
