"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.route(`/auth/sign-up`)
            .post((req, res) => {
            res.status(200).send(`POST requested for /auth/sign-up`);
        });
        this.app.route('/auth/sign-in')
            .post((req, res) => {
            res.status(200).send(`PUT requested for /auth/sign-in`);
        });
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFrRTtBQUdsRSxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQzFCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBb0IsRUFBRSxFQUFFO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUE7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDMUIsSUFBSSxDQUFDLENBQUMsR0FBbUIsRUFBRSxHQUFvQixFQUFFLEVBQUU7WUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtRQUVOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBRUo7QUFuQkQsZ0NBbUJDIn0=