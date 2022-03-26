import jwt from 'jsonwebtoken'

class JWT {
    constructor() {
        this.secret = process.env.SECRET || '1qaz@2wsx#102938'
    };

    sign(payload) {
        try {
            if (!payload) throw new Error('payload is missing in JWT.sign()');
            if (typeof payload !== 'object') throw new Error('object is required in payload.');
            const token = jwt.sign(payload, this.secret, { algorithm: 'HS256' });
            return token;
        }
        catch (err) {
            throw err;
        }
    }

    decode(payload) {
        try {
            if (!payload) throw new Error('payload is missing in JWT.decode()');
            const decoded = jwt.verify(payload, this.secret, {algorithms: 'HS256'});
            return decoded;
        }
        catch (err) {
            throw err;
        }
    }
}
export default JWT;