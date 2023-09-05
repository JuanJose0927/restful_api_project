const db = require('../models');

const getAllCategories = async()=>{
    try{
        let categories = await db.Category.findAll();
        return categories
    }catch(error){
        throw { status: 500, message: 'FAILED TO GET CATEGORIES' }
    }
}
const getCategory = async (id) => {
    try {
        let cate = await db.Category.findByPk(id)
        return cate
    } catch (error) {
        throw { status: 500, message: 'FAILED TO GET USER' }
    }
}

const createCategory = async (name) => {
    try {
        let newCate = await db.Category.create({
            name
        });
        return newCate
    } catch (error) {
        throw { status: 500, message: 'FAILED TO CREATE CATEGORY' }
    }
}

const updateCategory = async (id, name) => {
    try {
        let upCategories = await db.Category.update({
            name
        }, {
            where: {
                id,
            }
        });
        return upCategories
    } catch (error) {
        return error.message || 'FAILED TO UPDATED CATEGORY'
    }
}

const deleteCategory = async (id) => {
    try {
        let deleteCa = await db.Category.destroy({
            where: {
                id,
            }
        });
        return deleteCa
    } catch (error) {
        return error.message || 'FAILED TO DESTROY CATEGORY'
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
};