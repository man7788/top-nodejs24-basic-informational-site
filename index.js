const fs = require('node:fs/promises');
const http = require('node:http');

const readFile = async (path) => {
  try {
    const file = await fs.readFile(path, { encoding: 'utf8' });
    return file;
  } catch (err) {
    console.log(err);
  }
};

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url === '/') {
    const data = await readFile('index.html');
    res.end(data);
  } else if (req.url === '/about') {
    const data = await readFile('about.html');
    res.end(data);
  } else if (req.url === '/contact-me') {
    const data = await readFile('contact-me.html');
    res.end(data);
  } else {
    const data = await readFile('404.html');
    res.end(data);
  }
});

server.listen(8080);
