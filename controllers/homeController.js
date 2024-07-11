const data = require (`../data/data.json`);


const homePage = (req,res) => {



   
    res.status(200).render("pages/home", {data});
}

module.exports = { homePage };