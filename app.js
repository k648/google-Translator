require('dotenv').config()
const express = require("express");
const axios =  require("axios");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post('/api/v1/translate',(req,res)=>{

const Input = req.body.Input
const encodedParams = new URLSearchParams();
encodedParams.append("q", Input);
encodedParams.append("target", "en");
encodedParams.append("source", "fr");

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': 'bd7cc46deamsh31a3ac775748832p11ad77jsn2c6ae981f439'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
    res.send(response.data);
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})


const port=process.env.Port
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})