const winston = require('winston');
const expressWinston = require('express-winston');

module.exports = expressWinston.logger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            level: 'error',
            filename: 'logs/errors.log',
            format: winston.format.combine(
                winston.format.json(),
            )

        }),
        new winston.transports.File({
            level: 'info',
            filename: 'logs/common.log',
            format: winston.format.combine(
                winston.format.json(),
            )
        })
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: false,
    msg: "HTTP {{req.method}} {{req.url}}",
    expressFormat: true,
    ignoreRoute: function (req, res) { return false; }
})