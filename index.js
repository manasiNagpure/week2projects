const express = require("express")
const app = express()
const port = 3003

function calculateSum(counter){
    var sum = 0;
    for(var i =0 ;i<counter;i++){
        sum = sum + i;
    }
    return sum;
}

function handleFirstrequest(req,res){
    var counter = req.query.counter
    console.log(req.query.counter2);
    console.log(req.query.counter3);
    var calculatedSum = calculateSum(counter);
    
    //console.log(calculatedSum)
    var answer = "the sum is " + calculatedSum;
    res.send(answer);
}

app.get('/handleSUm',handleFirstrequest)

function started(){
    console.log("Example app listening at http://localhost:" + port)
}

app.listen(port,started)
