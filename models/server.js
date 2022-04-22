const express = require('express');
const cors = require('cors')


class Server {

    constructor() {
        this.app = express()

        //Variable de entorno del Puerto
        this.port = process.env.PORT


        this.paths = {
            distribuidores: '/api/distribuidores',
            productos: '/api/productos',
            canales: '/api/canales',
        }

        //middlewares
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.paths.distribuidores, require('../routes/Distribuidores'))
        this.app.use(this.paths.productos, require('../routes/Productos'))
        this.app.use(this.paths.canales, require('../routes/Canales'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor coriendo en el puerto', this.port)
        });
    }

}


module.exports = Server;