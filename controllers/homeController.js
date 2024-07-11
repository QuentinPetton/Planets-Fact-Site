const data = require (`${__dirname}/../data/data.json`);


const homePage = (req,res) => {



   
    res.status(200).render("pages/home", {data});
}

module.exports = { homePage };