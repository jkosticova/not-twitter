const bcrypt = require('bcrypt');

const saltRounds = 10;

const hashPassword = (password) => {
    return bcrypt.hash(password, saltRounds);
};
    
const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compare(plainPassword, hashedPassword);
};

module.exports = { hashPassword, comparePassword };
