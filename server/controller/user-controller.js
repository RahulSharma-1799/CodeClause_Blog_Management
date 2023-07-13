import User from "../model/user.js";
import bcrypt from "bcrypt";
export const signUpUser = async(request,response) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const user = { name: request.body.name, username: request.body.username, password: hashedPassword };
        const newUser = new User(user);
        await newUser.save();
        return response.status(200).json({msg:"Signup Successful"});
    } catch (error) {
        return response.status(500).json({msg:"Error while signup the user",error:error.message });
    }
}