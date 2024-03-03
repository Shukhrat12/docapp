import express from 'express';
import Retsept from './model/retsept.js';

const app = express();

// Kirish
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Session
// Views
app.set("views", "views");
app.set("view-engine", "ejs");

// Routers
app.get('/', (req, res) => {  // middleware
    res.send("Hello world!");
})

app.post('/docapp', async (req, res) => {
    const retsept = req.body;
    let data = new Retsept(req.body);
    const result = await data.save();
    console.log(result)
    res.send(result)
})

export default app;