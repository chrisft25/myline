# MyLine

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=chrisft25_myline&metric=alert_status)](https://sonarcloud.io/dashboard?id=chrisft25_myline)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chrisft25_myline&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=chrisft25_myline)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chrisft25_myline&metric=security_rating)](https://sonarcloud.io/dashboard?id=chrisft25_myline)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=chrisft25_myline&metric=bugs)](https://sonarcloud.io/dashboard?id=chrisft25_myline)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=chrisft25_myline&metric=code_smells)](https://sonarcloud.io/dashboard?id=chrisft25_myline)

MyLine es un proyecto lanzado en Colombia con el objetivo de llevar la inmensa información que se encuentra en internet hacia personas que no poseen smartphones ni acceso a internet, pero sí tienen cobertura celular.

  - Demostración del proyecto original: https://www.youtube.com/watch?v=YDGdww-F-HM

### Requisitos:

  - Node.js.
  - NPM.
  - Credenciales de acceso para Google Assistant API. Instrucciones: [Instrucciones](https://developers.google.com/assistant/sdk/guides/service/python/embed/config-dev-project-and-account)。
  - Cuenta en Twilio con un número teléfonico activo.

### Primeros pasos:

Instalar todas las dependencias.
```sh
$ npm install
```

Colocar el archivo con las credenciales .json en la carpeta `auth` y escribir el nombre del archivo en `app.js` en la propiedad `keyFilePath`.
```sh
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
```

### ¡Ya puedes desplegar el API!

Ahora vamos con Twilio:

- Debes configurar en el teléfono activo que al recibir una llamada ejecute un TwiML Bin y colocar lo siguiente:
```sh
<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Gather input="speech" language="es-SV" method="GET" action="[TU ENDPOINT]">
    <Say language="es" voice="woman">[MENSAJE DE BIENVENIDA]</Say>
  </Gather>
</Response>
```
*¡Puedes personalizar tanto como gustes!*
