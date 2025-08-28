const express=require('express');
const app=express();
const inventoryRoutes=require('./routes/inventoryRoutes');
const logger=require('./middleware/logger')

const PORT=3000;

app.use(express.json());
app.use(logger);

app.use('/home', inventoryRoutes);

app.get('/Inventory', (req, res) => {
    res.status(200).send("Welcome to Assignment-12");
});

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});