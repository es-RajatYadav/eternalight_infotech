const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, "N13yx", {
        expiresIn: "30d",
    });
};

module.exports = generateToken;