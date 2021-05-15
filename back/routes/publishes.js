const router = require('express').Router();
const Publish = require('../models/Publish');

// GET /publishes
router.get('/', (req, res) => {
    Publish.find()
        .then(publishes => {
            res.render('publishes/index', { publishes });
        })
        .catch(error => console.log(error));
});

//  GET/publishes/activos
router.get('/activos', (req, res) => {
    Publish.activos()
        .then(publishes => {
            res.render('publishes/index', { publishes });
        })
        .catch(error => console.log(error));
});

// GET /publishes/nuevo
router.get('/nuevo', (req, res) => {
    res.render('publishes/new');
});

// GET /publishes/delete/IDPUBLISH
router.get('/delete/:idPublish', (req, res) => {
    Publish.findByIdAndDelete(req.params.idPublish)
        .then(publishBorrado => {
            console.log(publishBorrado);
            res.redirect('/publishes');
        })
        .catch(error => console.log(error));
});

// GET /publishes/editar/IDPUBLISH
router.get('/editar/:idPublish', (req, res) => {
    Publish.findById(req.params.idPublish)
        .then(publish => res.render('publishes/edit', { publish }))
        .catch(error => console.log(error));
});

router.post('/create', cambiosFormulario, (req, res) => {
    Publish.create(req.body)
        .then(nuevoPublish => {
            console.log(nuevoPublish);
            res.redirect('/publishes');
        })
        .catch(error => console.log(error));
});

router.post('/update', cambiosFormulario, (req, res) => {
    Publish.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(PublishEditado => res.redirect('/publishes'))
        .catch(error => console.log(error))
});

// Middleware
function cambiosFormulario(req, res, next) {
    req.body.numero = parseFloat(req.body.numero);
    req.body.activo = req.body.activo ? true : false;
    next();
}

module.exports = router;