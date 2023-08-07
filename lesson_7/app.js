const express = require("express");
const morgan = require("morgan");
const app = express();



// register view engines
app.set('view engine', 'ejs');

app.set('views', 'views');

// middle ware & static files

app.use(express.static('public'))

app.use(morgan("dev"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}...`)
}
);

app.use((req, res, next) => {
    console.log("new request mode:")
    console.log("host: ", req.hostname)
    console.log("path:", req.path)
    console.log("method:", req.method)
    next();
})


app.use((req, res, next) => {
    console.log("new next middleware mode:")
    next();
})

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