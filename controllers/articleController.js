const ArticleService = require('../services/articleServices');

const getAllArtciles = async (req, res) => {
    const allArticles = await ArticleService.getAllArticles();

    if (allArticles) {
        res.status(200).send({ status: 'OK', data: allArticles });
    } else {
        res.status(400).send({ status: 'FAILE', data: null })
    }
}

const getArticles = async (req, res) => {
    let id = req.params.articleId;
    try {
        const article = await ArticleService.getArticle(id)
        res.status(200).send({status: 'OK', data: article});
    }
    catch(error){
        res.status(error.status || 500).send({status: 'FAILED', data: {data: error.message}})
    }
}

const createArticle = async (req, res)=>{
    const {body} = req;

    const createArt = await ArticleService.createArticle(body.title, body.content, body.UserId);
    if(createArt){
        res.status(200).send({status: 'OK', data: createArt})
    }
    else{
        res.status(400).send({status: 'FAILE', data: 'NO CREADO'})
    }
}

const updateArticle = async (req, res) =>{
    let id = req.params.articleId;

    let{title, content, UserId} = req.body;

    const updateAR = await ArticleService.updateArticle(id, title, content, UserId)

    if(updateAR){
        res.status(200).send({status: 'OK', data: updateAR})
    }else{
        res.status(400).send({status: 'FAILE', data: null})
    }
}

const deleteArticles = async (req, res)=>{
    let id = req.params.articleId;

    const deleteAR = await ArticleService.deleteArticle(id);
    if(deleteAR){
        res.status(200).send({status: 'OK', data: deleteAR});
    }
    else{
        res.status(400).send({status: 'FAILE', data: deleteAR})
    }
}
module.exports ={
    getAllArtciles,
    getArticles,
    createArticle,
    updateArticle,
    deleteArticles
};