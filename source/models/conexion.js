const mysql = require("mysql");
const { promisify } = require('util');

let sqlConnecion = mysql.createConnection({
    host: 'instancia1.cocmmvr8vgfj.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    port: "3306",
    database: "contactos"
});

sqlConnecion.connect(function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Se conecto con exito");
    }

});

sqlConnecion.query = promisify(sqlConnecion.query)

module.exports = sqlConnecion;
