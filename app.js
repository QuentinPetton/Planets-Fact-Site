const express = require('express');
const homeRouter = require(`./routers/homeRouter`);
const app = express();
const port = 3000;

//activer ejs
app.set("view engine", "ejs");
app.use(express.static(`./public`));
app.use(homeRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});