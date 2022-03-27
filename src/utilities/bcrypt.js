import bcrypt from "bcrypt";


class Bcrypt {
    constructor() {
        this.saltRounds = 10;
    }
    async encrypt(password) {
       try {
        const salt = await bcrypt.genSalt(this.saltRounds);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }
    catch (err){
        throw err;
    }
       }
    async decrypt(password,hash) {
        try {
            const result = await bcrypt.compare(password,hash);
            return result;
        }
        catch (err){
            throw err;
        }
    }
}
export default Bcrypt