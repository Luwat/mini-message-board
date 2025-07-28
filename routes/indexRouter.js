const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.send('Welcome to this mini message board!'));

module.exports = indexRouter;