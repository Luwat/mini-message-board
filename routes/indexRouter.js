const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const { Router } = require('express');
const { getAllMessages, createMessageGet, getMessageById, createMessage } = require('../controllers/messages-controller');
const indexRouter = Router();

indexRouter.get('/', getAllMessages);

indexRouter.get('/new', createMessageGet);

indexRouter.get('/message/:messageId', getMessageById)

indexRouter.post('/new', createMessage)
module.exports = indexRouter;