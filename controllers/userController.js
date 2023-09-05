const userServices = require('../services/userServices')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userServices.getAllUsers();
        res.status(200).send({status: 'OK', data: allUsers})
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: { error: error.message } });
    }

    // if(allUsers){
    //     res.status(200).send({status: 'OK', data: allUsers})
    // }else{
    //     res.status(400).send({status: 'FAILE', data:null})
    // }
}

const getUser = async (req, res) => {
    let id = req.params.userId;
    try {
        const user = await userServices.getUser(id);
        res.status(200).send({ status: 'OK', data: user })
    } catch (error) {
        res.status(error.status || 500).send({ status: 'FAILED', data: { error: error.message } });
    }
}

const createUser = async (req, res) => {
    try {
        const {body} = req

        const createdUser = await userServices.createUser(body.name, body.email, body.phone, body.password);
        res.status(200).send({ status: "OK", data: createdUser })
    } catch (error) {
        res.status(error.status || 500).send({ status: "FAILED", data: { error: error.message } });
    }
}
const updateUser = async (req, res) => {
    try{
        let id = req.params.userId;
        let { name, email, phone, password } = req.body;
        const updUser = await userServices.updateUser(id, name, email, phone, password)

        res.status(200).send({ status: 'OK', data: updUser })
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: { error: error.message } });
    }

    // if (updUser) {
    //     res.status(200).send({ status: 'OK', data: updUser })
    // } else {
    //     res.status(400).send({ status: 'FAILE', data: updUser })
    // }
}

const deleteUser = async (req, res) => {
    let id = req.params.userId;

    try{
        const deletUser = await userServices.deleteUser(id);
        res.status(200).send({ status: 'OK', data: deletUser })
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: { error: error.message } });
    }
    // if (deletUser) {
    //     res.status(200).send({ status: 'OK', data: deletUser })
    // } else {
    //     res.status(400).send({ status: 'FAILE', data: deletUser })
    // }
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};