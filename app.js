const express = require('express');
const indexRouter = require('./routes/indexRouter');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', indexRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})