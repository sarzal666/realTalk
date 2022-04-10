const app = require('./app.js');

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('hit!');
})

