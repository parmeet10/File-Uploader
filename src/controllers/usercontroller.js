import UserService from "../services/userservice.js";
import JsonWebToken from "../utilities/jwt.js";
class UserController {
    constructor() { }

    async signup(req, res) {
        try {
            const {
                firstname,
                lastname,
                username,
                password
            } = req.body;
            if (!firstname)
                //return res.status(400).send({ message: "firstname is required." });
                throw new Error("firstname required");
            if (firstname.length < 2 || firstname.length > 50)
                throw new Error("firstname inappropriate");
            if (!lastname)
                throw new Error("lastname required");
            if (lastname.length < 2 || lastname.length > 50)
                throw new Error("lastname inappropriate");
            if (!username)
                throw new Error("username required");
            if (username.length < 2 || username.length > 50)
                throw new Error("firstname required");
            if (!password)
                throw new Error("password required");
            if (password.length < 3 && password.length > 20)
                throw new Error("password inappropriate");
            const userService = new UserService();
            const _username = username.toLowerCase()
            const responseObj = await userService.signupUser(firstname, lastname, _username, password)
            if (!responseObj) {
                throw new Error("user signup failed! Try again")
            }
            const token = await new JsonWebToken().sign({ data: responseObj.id });
            return res.status(200).send({ message: "user registered!", id: responseObj.id, token: token })
        }
        catch (err) {
            console.log(err)
            return res.status(401).send(err.message)
        }

    }
    async login(req, res) {
        try {
            const {
                username,
                password
            } = req.body;
            if (!username)
                throw new Error("username required");
            if (username.length < 2 || username.length > 50)
                throw new Error("firstname required");
            if (!password)
                throw new Error("password required");
            if (password.length < 3 && password.length > 20)
                throw new Error("password inappropriate");
            const _username = username.toLowerCase();
            const userService = new UserService();
            const user = await new UserService().login(_username,password);
        }
        catch (err) {
            console.log(err);
            return res.status(401).send(err.message);
        }
    }
}
export default UserController