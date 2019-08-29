var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');
var bodyParse = require ("body-parser");

const email = require("./servidor/email")

var app = express();
app.set('port',(process.env.PORT || 3000));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true})); 
app.use('/static',express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

const oEmail = new email({
    "host":"smtp.gmail.com",
    "port": "465",
    "secure": true,
    "auth": {
        "type":"login",
        "user":"joellealad@gmail.com",
        "pass":"ALEXANDER"
    }
});


app.get('/',function(req,res,next){ 
    res.send('Joel');
});

app.post('/api/contacto',function(req, res, next){
    let email ={
        from:"joellealad@gmail.com",
        to: "joellealad@gmail.com",
        subject: "mensaje",
        html: `
            <div>
            <p> Nombre: ${req.body.n} </p>
            <p> Teléfono: ${req.body.t} </p>
            <p> Correo: ${req.body.c} </p>
            <p> mensaje: ${req.body.m} </p>
            </div>
        `
    };

    oEmail.enviarCorreo(email);
    res.send("ok");
});



app.listen(app.get('port'),()=>{
    console.log('Servidor activo');
})