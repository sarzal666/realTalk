const app = require('./app.js');

const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//for CORS policy
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")

  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log('hit!');
})

app.post('/signIn', (req, res) => {
  console.log(req.body);

  res.json({
    result: true,
    token: 'test token'
  });
})

