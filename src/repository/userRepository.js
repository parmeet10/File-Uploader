import User from "../models/mongo/user.js";
import CSV from "../models/mongo/csvModel.js";
class UserRepository {
    constructor() { }
    async save(
        firstname,
        lastname,
        username,
        password
    ) {
        const user = await User.create(
            {
                firstname,
                lastname,
                username,
                password
            });
        return user
    }
    async findByUsername(username) {
        const user = await User.find({ "username": username })
        return user
    }
    async fileSave(data, id) {
    
        for (let element of data) {
            let name = element.name;
            let description = element.description;
            let quantity = element.quantity;
            let price = element.price

            await CSV.create({ name, userId: id, description, quantity, price })

        }
        
    }
    async userFile(id){
        const userFiles = await CSV.find({id:id})
        return userFiles;
    }
}
export default UserRepository;