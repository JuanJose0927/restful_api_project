const {all} = require('../api/v1/routes/categories.routes')
const categoryServices = require('../services/categoryServices');

const getAllCategories = async (req, res) => {
    const AllCategories = await categoryServices.getAllCategories();

    if (AllCategories) {
        res.status(200).send({ status: 'OK', data: AllCategories });
    } else {
        res.status(400).send({ status: 'FAILE', data: null })
    }
}

const getCategory = async (req, res) => {
    let id = req.params.id;
    try {
        const category = await categoryServices.getCategory(id)
        res.status(200).send({status: 'OK', data: category});
    }
    catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: {data: error.message}})
    }
}

const createCategory = async (req, res)=>{
    const {body} = req;

    const createCate = await categoryServices.createCategory(body.name);
    if(createCate){
        res.status(200).send({status: 'OK', data: createCate})
    }
    else{
        res.status(400).send({status: 'FAILE', data: 'NO CREADO'})
    }
}

const updateCategory = async (req, res) =>{
    let id = req.params.id;

    let{name} = req.body;

    const updateCa = await categoryServices.updateCategory(id, name)

    if(updateCa){
        res.status(200).send({status: 'OK', data: updateCa})
    }else{
        res.status(400).send({status: 'FAILE', data: null})
    }
}

const deleteCategory = async (req, res)=>{
    let id = req.params.id;

    const deleteCa = await categoryServices.deleteCategory(id);
    if(deleteCa){
        res.status(200).send({status: 'OK', data: deleteCa});
    }
    else{
        res.status(400).send({status: 'FAILE', data: deleteCa})
    }
}
module.exports ={
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};