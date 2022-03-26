import User from "../models/mongo/user.js";
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
}
export default UserRepository;