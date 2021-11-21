const express = require('express');
const app = express();

app.use(express.json());


const carros = ['Gol', 'Corsa', 'Hb20', 'Palio'];


//RETORNA UM CARRO
app.get('/carros/:index', (req , res) => {
    const { index } = req.params;

    return res.json(carros[index]);
});


//CREATE
app.post('/carros', (req , res) => {

    const { name } = req.body;
    carros.push(name);
    return res.json(carros);

});


//READ
app.get('/carros', (req , res) => {

    return res.json(carros);

});

//UPDATE
app.put('/carros/:index', (req , res) => {

    const { index } = req.params;
    const { name } = req.body;
    
    carros[index] = name;
    
    return res.json(carros);

});


//DELETE
app.delete('/carros/:index', (req , res) => {

    const { index } = req.params;

    carros.splice(index , 1);
    return res.json({ message: 'O carro foi deletado.' });

});



const PORT = 5000;
app.listen(PORT, (req , res) => {
    console.log('server rodando')
})