const express = require('express');
const path = require('path');
const app = express();

const options = {
  root: path.join(__dirname, 'public'),
};

app.get('/', (req, res) => res.sendFile('/index.html', options));
app.get('/about', (req, res) => res.sendFile('/about.html', options));
app.get('/contact-me', (req, res) => res.sendFile('/contact-me.html', options));
app.use((req, res) => res.sendFile('/404.html', options));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
