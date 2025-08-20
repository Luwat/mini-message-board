const express = require('express');
const indexRouter = require('./routes/indexRouter');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const assetsPath = path.join(__dirname, 'assets');
app.use(express.urlencoded({ extended: true}))
app.use(express.static(assetsPath));
app.use('/', indexRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})