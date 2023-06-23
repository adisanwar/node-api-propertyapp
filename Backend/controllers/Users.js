import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 

export const getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes : [ 'id', 'name', 'email']
        });
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
    }
}

export const getUsersById = async (req, res) => {
    try {
        const users = await Users.findOne({
            where : {
            id: req.params.id
    }});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async (req, res) =>{
    const { name, email, password, confPassword } = req.body;
    if(password !== confPassword ) return res.status(400).json({msg : "password dan Conf Password Tidak Sesuai" });
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            name : name,
            email : email,
            password : hashPassword
        });
        res.json({ msg : "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }

};

export const CreateUser = async (req, res) => {
    try {
        await Users.create(req.body);
        res.status(201).json({msg: "Create User Success"});
    } catch (error) {
        console.log(error.message);
    }

}

export const updateUser = async (req, res) => {
    try {
        await Users.update(req.body,{
            where : {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }

}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        await user.destroy();
        res.status(200).json({ msg: "User deleted" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};



export const Login = async (req, res) => {

    try {
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        if (user.length === 0) {
            return res.status(400).json({ msg: "Email not found" });
        }
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if (!match) return res.status(400).json({ msg: "Wrong password" });

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "20s"
        });

        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        });

        await Users.update({ refreshToken: refreshToken }, {
            where: {
                id: userId
            }
        });

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });

    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
};
