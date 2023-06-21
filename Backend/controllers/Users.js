import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak Cocok"});
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({ msg: "Register berhasil" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }

}

export const Login = async (req, res) => {
    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong password" });
        
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        
        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        
        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        
        await Users.update({ refreshToken: refreshToken }, {
            where: {
                id: userId
            }
        });
        
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        // res.cookie('refreshToken', refreshToken,{
        //     httpOnly: true,
        //     maxAge: 24 * 60 * 60 * 1000
            
        // });
        
        res.json({ accessToken });

    } catch (error) {
        res.status(404).json({ msg: "Email tidak ditemukan" });
    }
}