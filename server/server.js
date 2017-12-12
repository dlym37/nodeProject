const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 4000;
const cors = require('cors');
const controlHerb = require('./controllers/herbController');
const controlCarn = require('./controllers/carnController');


app.use(bodyParser.json()); 
app.use(cors());

app.post('/api/carns', controlCarn.create);//How are these calls being used in my src files?
app.get('/api/carns', controlCarn.read);//How does it know to use one get request from another?
app.put('/api/carn/:id', controlCarn.update);//Can I assign a variable name to them?
app.delete('/api/carn/:name', controlCarn.delete);

app.post('/api/herbs', controlHerb.create);
app.get('/api/herbs', controlHerb.read);
app.put('/api/herb/:id', controlHerb.update);
app.delete('/api/herb/:id', controlHerb.delete);






app.listen(port, ()=> { 
    console.log(`i am on port ${port}`);
})