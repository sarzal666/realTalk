const bodyParser = require('body-parser');
const { getApp } = require('firebase-admin/app');
const app = require('../Old/app.js');
const firebase = require('../Old/firebase.js');
const loggerMiddleware = require('../Old/middlewares/loggerMiddleware.js');
const corsMiddleware = require('../Old/middlewares/corsMiddleware.js');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// for CORS policy
app.use(corsMiddleware)
app.use(loggerMiddleware)

interface SignEmailRequest {
  email: string,
  password: string,
  agreement: boolean
}

app.post('/signup', (req :Request, res :Response) => {

  // getApp().auth(firebase).createUser({
  //   email: req.body.email,
  //   password: req.body.password,
  //   displayName: `${req.body.name} ${req.body.surname}`,
  //   agreement: req.body.agreement,
  // })
  //   .then((userRecord) => {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     console.log('Successfully created new user:', userRecord.uid);
  //
  //     res.json({
  //       result: true,
  //       user: userRecord
  //     })
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     res.end(JSON.stringify({
  //       result: false,
  //       message: error.message
  //     }))
  //   });

})


