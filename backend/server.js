const express  = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())

app.get('/' , (req,res) =>{
    res.send('Welcome to the promptPal backend server');
})

app.post('/api/explain',(req,res) => {
    const topic = req.body.topic;
    res.json({message: topic})
})
app.listen(3000,()=>{
    console.log('promptPal server is running on port 3000');
})