const path = require('path');
const GoogleAssistant = require('./lib/google/index');
const express = require('express');
const app = express();
require('dotenv').config();

const config = {
  auth: {
    //  Esta es la ruta donde se encuentra el .json con los datos de autenticación de Google
    keyFilePath: path.resolve(__dirname, 'auth/client.json'), 

    // Esta es la ruta donde se almacenará el token que se genere al autenticar por primera vez.
    savedTokensPath: path.resolve(__dirname, 'auth/tokens.json')
  },
  conversation: {
    lang: 'es-MX' //Idioma del Google Assistant
  },
};

const assistant = new GoogleAssistant(config.auth);

app.get('/twilio',(req,res)=>{

  //Recogemos el valor de SpeechResult que envía Twilio.
  let busqueda = req.query.SpeechResult;
  console.log(`Vamos a buscar: "${busqueda}"`)

  //Se lo asignamos a la conversación con el Google Assistant con la propiedad textQuery
  config.conversation.textQuery = busqueda;

  //Hacemos la función para ejecutar la conversación y regresar en formato de TwiML la respuesta.
const realizarBusqueda = (conversation)=>{
  conversation
  .on('response', resultados=>{
    console.log(`Resultado(s) encontrados: "${resultados}"`)
    res.send(`<Response><Say language="es" voice="woman">${resultados}</Say></Response>`)
  })
}

  //Ejecutamos el asistente.
  assistant.start(config.conversation,realizarBusqueda);
})

app.listen(process.env.API_PORT,()=>{
  console.log("Encendido en el puerto " + process.env.API_PORT)
})

