
const db = require('../models')

const getAllArticles = async() =>{
    try{
        let Articles = await db.Article.findAll({
            include:{
                model: db.User,
                required: true,
                as: "User",
                attributes: ["id", "name", "email"],
            },

        });
        return Articles;
    }catch(error){
        return error.message || "Failed to get Artciles"
    }
}

const getArticle = async(id) =>{
    try{
        let Article = await db.Article.findByPk(id)
        return Article
    }catch(error){
        throw {ststus: 500, message: error.message || 'FAILED TO  GET ARTICLE'}
    }
}

const createArticle = async(title, content, UserId)=>{
    try{
        let newArticle = await db.Article.create({
            title,
            content,
            UserId
        });
        if(newArticle){
            const categories = [1,2,3];
            await newArticle.setCategories(categories);
        }
        return newArticle;
    }catch(error){
        return error.message || 'FAILED TO CREATE ARTICLE'
    }
}

const updateArticle = async(id, title, content, UserId) =>{
    try{
        let updateArt = await db.Article.update({
            title,
            content,
            UserId
        },{
            where:{
                id,
            }
        }) ;
        return updateArt;
    }catch(error){
        return error.message  || 'FAILED UPDATE THE ARTICLE'
    }
}

const deleteArticle = async(id)=>{
    try{
        const deleteArt = await db.Article.destroy({
            where: {
                id,
            }
        });
        return deleteArt;
    }catch(error){
        return error.message || 'Article coudl be not deleted'
    }
}

module.exports ={
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};
