const User = require('../Models/User');
const { findByCredentials } = require('../Models/User');
const generateToken = require('../utils/generateToken')

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        user.save();
        const token = generateToken(res, email);

        res.status(201).json({ user, accessToken: token });
    }
    catch (e) {
        if (e.code === 11000) {
            return res.status(400).send("Email already exists");
        }
        res.status(400).send(e.message);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findByCredentials(email, password);
        await user.save();

        const token = generateToken(res, email);
        const name = user.name;
        res.status(200).json({
            email,
            name,
            accessToken: token
        });
    }
    catch (e) {
        res.status(400).json(e.message);
    }
}

const logout = async (req, res) => {
    try {
        res.cookie('jwtToken', "", {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(200).json('User Logged Out');
    }
    catch (e) {
        console.log(e.message);
    }
}
module.exports = { login, signup, logout }