const { Model } = require('sequelize');
const db = require('../models'); //Requerimos los modelos
const { Router } = require('express'); //Requerimos Router del framework
const router = new Router() //Creamos instancia

router.get('/', (req, res) => {
    console.log("get ruta principal")
    res.send({ Tittle: 'Bienvenidos Sapos' })
})
router.post('/new', async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let password = req.body.password;

    try {
        await db.User.create({
            name,
            email,
            phone,
            password
        })
        res.status(200).send({ status: 'OK', message: 'User created' });
    } catch (error) {
        res.status(400).send('User could not be create')
    }
})
router.get('/all', async (req, res) => {
    try {
        let users = await db.User.findAll();
        res.status(200).send({ status: 'OK', message: "Users listed", data: users })
    } catch (error) {
        res.status(400).send({ status: 'FAIL', message: "Users error!" })
    }
})
router.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let users = await db.User.findByPk(id);
        res.status(200).send(users);
    }
    catch(error){
        res.status(400).send('no se encuentra el usuario')
    }
})

router.put('/:id', async(req, res)=>{
    try{
        let id = req.params.id;
        let {name, email, password} = req.body;
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(id);
        await db.User.update(
            {name, email, password},
            {
                where: {
                    id,
                }
            }
        );
        res.status(200).send('Usaurio Actualizado');
    }catch(error){
        res.status(400).send('No se pudo actualizar');
    }
})
router.delete('/:id', async(req, res)=>{
    try{
        let id = req.params.id;
        await db.User.destroy({
            where: {
                id,
            }
        });
        res.status(200).send('Usuario eliminado')
    }catch(error){
        res.status(200).send('Usuario no eliminado')
    }
})
module.exports = router;