const data = require (`../data/data.json`);


const homePage = (req,res) => {
    res.redirect('/planet/mercury');
}

const planet = (req,res) => {
    const planetName = req.params.name.toLowerCase();
    const planetData = data.find(planet => planet.name.toLowerCase() === planetName);
    
    
    res.render("pages/planet", {
        planet: planetData,
        data
    });
}

module.exports = {homePage,  planet};