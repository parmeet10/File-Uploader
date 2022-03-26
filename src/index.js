import express from 'express'
import Mongo from './clients/mongo.js'
import Server from './server.js'

async function main() {
    const app = express()
    await new Mongo().connect().then(()=>console.log("MongoDB cluster is up and running successfully"))
    new Server(app).start();
}
main();