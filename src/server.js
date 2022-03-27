import express from "express";
import bodyParser from 'body-parser'
import cors from 'cors'
import path from "path";
import routes from "./routes/index.js"

class Server {
    constructor(app) {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.init();
    }

    init() {
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use(bodyParser.json());
       // this.app.use('/uploads', express.static(path.join(_dirname, 'uploads')))
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use('/', routes);
    }

    start() {
        this.app.listen(this.port, () => {
            console.log(`server started and running on port:${this.port}`)
        });
    }

}
export default Server