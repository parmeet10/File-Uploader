import mongoose from "mongoose";

class Mongo {
    constructor() {
        this.url = "mongodb+srv://parmeet:parmeet123@cluster0.p1jkr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    };
    async connect(){
        await mongoose.connect(this.url);
    }
}
export default Mongo;