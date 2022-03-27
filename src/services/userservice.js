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
            const existingUser = await  new UserRepository().findByUsername(username);
            if(!existingUser.length) {
            const bcrypt = new Bcrypt();
            const hashPassword = await bcrypt.encrypt(password);
            const user = await new UserRepository().save(firstname, lastname, username, hashPassword)
            return user;
            }
            else 
            throw new Error("User already exist! For login try 'http://localhost:3000/users/signup' ")
        }
        catch (err) {
            throw err
        }
    }
    async login(
        username,
        password
    ) {
        try {
            const user = await new UserRepository().findByUsername(username)
            if(!user.length){
                throw new Error("Cannot find user with this username")
            }
            else{
                const comparePassword = await new Bcrypt().decrypt(password,user[0].password)
                if(comparePassword){
                    return user
                }
                else throw new Error("Either username or password is incorrect")
            }
            
        }
        catch (err) { 
            throw err 
        }
    }
}
export default UserService;