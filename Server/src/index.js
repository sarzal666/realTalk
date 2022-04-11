const bodyParser = require('body-parser');
const { getApp } = require('firebase-admin/app');
const app = require('./app.js');
const firebase = require('./firebase.js');
const loggerMiddleware = require('./middlewares/loggerMiddleware.js');
const corsMiddleware = require('./middlewares/corsMiddleware.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// for CORS policy
app.use(corsMiddleware)
app.use(loggerMiddleware)


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

      res.json({
        result: true,
        user: userRecord
      })
    })
    .catch((error) => {
      console.log('fail');
      res.end(JSON.stringify({
        result: false,
        message: error.message
      }))
    });

})


