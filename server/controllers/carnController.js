var tasks = [{description: 'Walk the dog', completed: false}]
var dinoStuff = require('../dinoInfo.js');
var carnsCollect = dinoStuff.filter(e=>e.diet === "carnivorous");

var id = 0;
module.exports = {
    create: (req,res) => { 
        const { name, meaningOfName, diet, period} = req.body;
        carnsCollect.push({id, name, meaningOfName, diet, period });
        id++;
        return res.status(200).send(carnsCollect);
    },
    read: (req,res) => {
        return res.status(200).send(carnsCollect);
    },

    update: (req,res) => {
        const { name, meaningOfName, diet, period} = req.body;
        const id = parseInt(req.params.id);
        const carnIndex = carnsCollect.findIndex(carn => carn.id == id);
        //let newCarn = carnsCollect[carnIndex];

        carnsCollect[carnIndex]= {
            name: name,
            meaningOfName: meaningOfName,
            diet: diet,
            period: period
        }
     },

    delete: (req,res) => {
        const deleteID = req.params.name;
        carnsIndex = carnsCollect.findIndex(par => par.name == deleteID)
        carnsCollect.splice(carnsIndex, 1);
        res.status(200).send(carnsCollect);
     }
}