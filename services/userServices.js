const db = require('../models/')

const getAllUsers = async () => {
    try {
        let users = await db.User.findAll()
        return users;
    } catch (error) {
        throw { status: 500, message: 'FAILED TO GET USERS' }
    }
}
const getUser = async (id) => {
    try {
        let user = await db.User.findByPk(id)
        return user
    } catch (error) {
        throw { status: 500, message: 'FAILED TO GET USER' }
    }
}

const createUser = async (name, email, phone, password) => {
    try {
        let newUser = await db.User.create({
            name,
            email,
            phone,
            password
        });
        return newUser
    } catch (error) {
        throw { status: 500, message: 'FAILED TO CREATE USER' }
    }
}

const updateUser = async (id, name, email, phone, password) => {
    try {
        let upNewUser = await db.User.update({
            name,
            email,
            phone,
            password
        }, {
            where: {
                id,
            }
        });
        return upNewUser
    } catch (error) {
        return error.message || 'FAILED TO UPDATED USER'
    }
}

const deleteUser = async (id) => {
    try {
        let deleUser = await db.User.destroy({
            where: {
                id,
            }
        });
        return deleUser
    } catch (error) {
        return error.message || 'FAILED TO DESTROY USER'
    }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};