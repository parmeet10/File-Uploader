import JWT from "../utilities/jwt";

class AuthMiddleware {
    constructor() {

    }
    authenticate(req, res, next) {
        try {
            const token = req.headers.token;
            if(!token) return res.status(401).send({message:"unauthorized to perform this operation"})
            const decoded = new JWT().decode(token)
            req.user = decoded;
            next();

        }
        catch (err) {
            console.log(err);
            return res.status(500).send({message:"oops! something went wrong try again"})
        }
    }
}