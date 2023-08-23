const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.jwtToken;
    if (token) {
        try {
            const decodeToken = jwt.verify(token, process.env.SECRET_KEY)
            req.user = decodeToken;
            next();
        }
        catch (e) {
            res.status(404)
        }
    }
}

module.exports = authMiddleware