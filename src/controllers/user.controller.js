const { generatePassword } = require('../lib/utils');
const User = require("../models/User")

// saving data in db
exports.createUser = async (req, res) => {
    try {

        const newUser = new User(req.body);
        newUser.password = await generatePassword(newUser.password);
        const insertData = await newUser.save();
        res.status(200).send({ status: "success", data: insertData })

    } catch (error) {
        res.send({ error: error })

    }
}

exports.getUser = async (req, res) => {
    try {
        const newUser = await User.find();
        res.status(200).send({ data: newUser })
    } catch (error) {
        res.send({ error: error })
    }

}


exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({
            status: "successfully updated",
            data: updateUser
        })
    } catch (error) {
        res.status(404).json({
            status: "Update failed",
            message: error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        
        res.status(200).json({
            status: "successfully deleted",
            data: deleteUser
        })
    } catch (error) {

        res.status(404).json({
            status: "Deletion failed",
            message: error.message
        })
    }
}