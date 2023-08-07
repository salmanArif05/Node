const express = require("express");

const app = express();

// register view engines
app.set('view engine', 'ejs');

app.set('views', 'views');

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
}
);

app.get('/', (req, res) => {
    const blogs = [
        { title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur" },
        { title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur" },
    ]
    res.render('index', { title: "Home", blogs });
})

app.get('/about', (req, res) => {
    res.render('about', { title: "About" });
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create" });
})

app.use((req, res) => {
    res.render('404')
})