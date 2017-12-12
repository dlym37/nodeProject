var tasks = [{description: 'Walk the dog', completed: false}]
var dinoStuff = require('../dinoInfo.js');
var herbCollect = [];
function getherb (){
for (i=0; i < dinoStuff.length; i++){
    if (dinoStuff[i].diet === "herbivorous") {
        herbCollect.push(dinoStuff[i]);
    }
}
}
getherb();
var id = 0;
module.exports = {
    create: (req,res) => { 
        const { name, meaningOfName, diet, period} = req.body;
        herbCollect.push({id, name, meaningOfName, diet, period });
        id++;
        return res.status(200).send(herbCollect);
    },
    read: (req,res) => {
        return res.status(200).send(herbCollect);
    },

    update: (req,res) => {
        const { name, meaningOfName, diet, period} = req.body;
        const id = req.params.id;
        const herbIndex = messages.findIndex(herbId => herbId.id == id);
        let newherb = herbCollect[herbIndex];

        herbCollect[herbIndex]= {
            name: newherb.name,
            meaningOfName: newherb.meaningOfName,
            diet: newherb.diet,
            period: newherb.period
        }
     },

    delete: (req,res) => {
        const deleteID = req.params.id;
        herbIndex = herbCollect.findIndex(par => par.id == deleteID)
        herbCollect.splice(herbIndex, 1);
        res.status(200).send(herbCollect);
     }
}