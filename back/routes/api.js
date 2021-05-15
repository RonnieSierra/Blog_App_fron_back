const router = require('express').Router();

const publishesApiRouter = require('./api/publishes');

router.use('/publishes', publishesApiRouter);

module.exports = router;