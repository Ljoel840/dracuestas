const nodemailer = require("nodemailer");

class Email{

    constructor(oConfig){
        this.createTransport = nodemailer.createTransport(oConfig);
    }

    enviarCorreo(oEmail){
        try{
            this.createTransport.sendMail(oEmail, function(error, info) {
                if (error) {
                    console.log("Erro al enviar email");
                } else {
                    console.log("Correo enviado correctamente");
                }
                this.createTransport.close();
            });
        }catch(x){
            console.log("Email.enviarcorreo --Error--  " + x);
        }
    }
}
module.exports = Email;