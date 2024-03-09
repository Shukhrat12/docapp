import express from 'express';
import Retsept from './model/retsept.js';
import retsept from './model/retsept.js';

const app = express();

// Kirish
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Session
// Views
app.set("views", "views");
app.set("view engine", "ejs");

// Routers
app.get('/', async (req, res) => {  // middleware
    const data = await Retsept.find()
    res.render("index", {items: data})
})

app.post('/docapp', async (req, res) => {
    const retsept = req.body;
    let data = new Retsept({
        dorini_nomi: retsept.dorini_nomi, 
        dozasi: retsept.dozasi, 
        kunlik_takrorlanishi: retsept.kunlik_takrorlanishi,
        davomiyligi: retsept.davomiyligi,
        eslatma: retsept.eslatma
    });
    
    const result = await data.save();
    console.log(result)
    res.send(result) 
})

export default app;