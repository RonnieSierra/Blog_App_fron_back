const router = require('express').Router();
const Publish = require('../../models/Publish');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    console.log("USER_ID", req.usuarioId);
    Publish.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            res.json(error);
        });
});

router.post('/', [
    check('titulo', 'El campo título es obligatorio').exists(),
    check('post', 'El campo post es obligatorio').exists(),
    check('numero', 'El número es incorrecto').exists().isNumeric(),
    
], async (req, res) => {

    // Comprobamos los errores del BODY
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array() });
    }

    try {
        const nuevoPost = await Publish.create(req.body);
        res.json(nuevoPost);
    } catch (error) {
        res.json(error);
    }
});

router.put('/:idPost', async (req, res) => {
    try {
        const postEditado = await Publish.findByIdAndUpdate(req.params.idPost, req.body, { new: true });
        res.json(postEditado);
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.delete('/:idPost', (req, res) => {
    Publish.findByIdAndRemove(req.params.idPost)
        .then(publishBorrado => {
            res.json(publishBorrado);
        }).catch(error => {
            res.json({ error: error.message });
        });
});




module.exports = router;