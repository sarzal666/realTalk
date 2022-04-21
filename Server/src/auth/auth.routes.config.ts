import {CommonRoutesConfig} from "../common/common.routes.config";
import express from "express";

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }
    configureRoutes(): Express.Application {

        this.app.route(`/auth/sign-up`)
            .post((req: express.Request, res:express.Response) => {
                res.status(200).send(`POST requested for /auth/sign-up`);
            })

        this.app.route('/auth/sign-in')
            .post((req:express.Request, res:express.Response) => {
                res.status(200).send(`PUT requested for /auth/sign-in`);
            })

        return this.app;
    }

}