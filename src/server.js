import express from "express";

class Server {
    constructor(app) {
        this.app = app;
        this.port = process.env.PORT || 3000;
        this.init();
    }

    init() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
       // this.app.use('/', routes);
    }

    start() {
        this.app.listen(this.port,()=>{
            console.log(`server started and running on port ${this.port}`)
        });
    }

}
export default Server