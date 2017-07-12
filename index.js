const app = require('./app');
const config = require('./config')


app.listen(config.port , function (){
    console.log(`Aplicación corriendo en htpp://localhost:${config.port}`)
    console.log("Desarrollado por: Cristian Franco Bedoya");
    console.log("Ramla Pro. Software 2017");
    console.log("Dueño del producto: Álvaro Franco Giraldo");
});
