const bodyParser = require('body-parser');
const { getApp } = require('firebase-admin/app');
const app = require('./app.js');
const firebase = require('./firebase.js');

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

  getApp().auth(firebase).createUser({
    email: req.body.email,
    password: req.body.password,
    displayName: `${req.body.name} ${req.body.surname}`,
    agreement: req.body.agreement,
  })
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully created new user:', userRecord.uid);
      console.log(userRecord);
    })
    .catch((error) => {
      console.log('Error creating new user:', error);
    });

  res.json({
    result: true,
    token: 'test token'
  });
})

