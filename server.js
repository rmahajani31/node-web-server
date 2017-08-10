const express = require('express');

const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;
hbs.registerPartials(`${__dirname}/views/partials`);
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.use((request, response, next) => {
    console.log(`Timestamp: ${new Date().toString()} Method: ${request.method} Url: ${request.url}`);
    response.render('maintenance.hbs', {
        pageTitle: 'Maintenance Page',
        pageText: 'This site is currently under maintenance. Please come back later...'
    });
})

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        message: "Welcome to the home page"
    })
});

app.get('/about', (request, response) => {
    response.render('about.hbs', {
        pageTitle: 'About Page'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});