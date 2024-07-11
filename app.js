const express = require('express');
const homeRouter = require(`${__dirname}/routers/homeRouter`);
const app = express();
const port = 3000;

//activer ejs
app.set("view engine", "ejs");


app.use(homeRouter);


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});