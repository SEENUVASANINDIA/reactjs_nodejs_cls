const express = require('express');

const app = express();

var port = 8000;
app.use(express.json)

app.get('/students', (req, res) => {
    res.send({
        "list": [{ "name": "keerthna" }, { "name": "vglug" }]
    })
})

app.post('/create',(req,res)=>{
    const {name,age}=req.body;
    if(!name){
        res.send({
            "name":`your name is ${name}`
        })
    }
})
app.listen(port, () => { console.log(`app runnimg on :${port}`) });