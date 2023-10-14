const bcrypt = require('bcrypt');

exports.generatePassword = async (password) => {
    try {
        return await bcrypt.hash(password, 8)
    } catch (error) {
        console.log(error);
    }
}