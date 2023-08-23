const jwt = require('jsonwebtoken');

const generateToken = (res, email) => {
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
        expiresIn: '3d'
    })

    res.cookie('jwtToken', token, {
        httpOnly: true,
        sameSite: 'strict'
    })
}

module.exports = generateToken