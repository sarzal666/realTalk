import express from 'express';
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    protected constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
    }
    getName() {
        return this.name;
    }

    abstract configureRoutes(): Express.Application
}