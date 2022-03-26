import Bcrypt from "../utilities/bcrypt.js";
import UserRepository from "../repository/userRepository.js";
class UserService {
    constructor() { }

    async signupUser(
        firstname,
        lastname,
        username,
        password
        ) {
        try {
            const bcrypt = new Bcrypt();
            const hashPassword =  await bcrypt.encrypt(password);
            const user = await new UserRepository().save(firstname, lastname, username, hashPassword)
            return user;
        }
        catch (err) {
            throw err
        }
    }
    async login(
        username,
        password
    ){
        try{}
        catch(err){}
    }
}
export default UserService;