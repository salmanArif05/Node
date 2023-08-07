const express = require('express');

// express app
const app = express();

// listen for requests

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


app.get('/', (req, res) => {
    // res.send('<h1>Home Page</h1>');

    res.sendFile('./views/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    // res.send('<h1>About Page</h1>');
    res.sendFile('./views/about.html', { root: __dirname })
})

// redirects
app.get('/about-us', (req, res) => [
    res.redirect('/about')
])

// 404 page

app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname })
})