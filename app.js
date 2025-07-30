const express = require('express');
const indexRouter = require('./routes/indexRouter');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true}))
app.use('/', indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})