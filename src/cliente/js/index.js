const axios = require("axios");
require('../css/estilos.css');


document.getElementById("botonEnviar").addEventListener("click",function() {
  let strNombre = document.getElementById("nombre").value;
  let strTelefono = document.getElementById("telefono").value;
  let strCorreo = document.getElementById("correo").value;
  let strMensaje = document.getElementById("mensaje").value;
  if(strCorreo !="" && strNombre !="" && strMensaje !=""){
      let datos ={
          n: strNombre,
          t: strTelefono,
          c: strCorreo,
          m: strMensaje
      };
     
      axios.post('/api/contacto',datos)
      .then(function(response){
          document.getElementById("nombre").value="";
          document.getElementById("telefono").value="";
          document.getElementById("correo").value="";
          document.getElementById("mensaje").value="";
          alert("Gracias por Escribirnos, en breve te contactaremos");
      }).catch(function(error){
          console.log(error);
      });
  }else{
      alert("Por favor rellenar todos los campos");
  }

});






















$('#recipeCarousel').carousel({
    interval: 100
  })
  
// optional
$('#blogCarousel').carousel({
    interval: 3000
});


