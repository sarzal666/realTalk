"use strict";
const bodyParser = require('body-parser');
const { getApp } = require('firebase-admin/app');
const app = require('../Old/app.js');
const firebase = require('../Old/firebase.js');
const loggerMiddleware = require('../Old/middlewares/loggerMiddleware.js');
const corsMiddleware = require('../Old/middlewares/corsMiddleware.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// for CORS policy
app.use(corsMiddleware);
app.use(loggerMiddleware);
app.post('/signup', (req, res) => {
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUMxQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDakQsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7QUFDM0UsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFFdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDNUIsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUMsQ0FBQTtBQUVILGtCQUFrQjtBQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQVF6QixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUVsRCx1Q0FBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQyx5REFBeUQ7SUFDekQsbUNBQW1DO0lBQ25DLEtBQUs7SUFDTCw0QkFBNEI7SUFDNUIsMEVBQTBFO0lBQzFFLHFFQUFxRTtJQUNyRSxFQUFFO0lBQ0YsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsU0FBUztJQUNULE9BQU87SUFDUCx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsK0JBQStCO0lBQy9CLFVBQVU7SUFDVixRQUFRO0FBRVYsQ0FBQyxDQUFDLENBQUEifQ==