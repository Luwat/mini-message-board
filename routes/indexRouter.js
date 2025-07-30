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
const indexRouter = Router();

indexRouter.get('/', (req, res) => res.render('index', { title: "Mini Message Board", messages}));

indexRouter.get('/new', (req, res) => {
    res.render('form', { title: "Add a New Message" });
});

indexRouter.get('/:user', (req, res) => {
    const user = req.params.user;
    const userMessages = messages.find(message => message.user === user);
    if (userMessages) {
        res.render('messageDetails', { title: `Messages from ${user}`, message: userMessages });
        console.log(userMessages);
    } else {
        res.status(404).send('User not found');
    }
})

indexRouter.post('/new', (req, res) => {
    const { messageUser, messageText } = req.body;
    const newMessage = {
        text: messageText,
        user: messageUser,
        added: new Date()
    };
    messages.push(newMessage);
    res.redirect('/');
})
module.exports = indexRouter;