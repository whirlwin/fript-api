const UserService = require("../../user/UserService");
const UserTypeOnboardingService = require("./UserTypeOnboardingService");
const winston = require("winston");

class UserTypeOnboardingController {

    constructor() {
        this.userService = new UserService();
        this.gymCenterOnboardingService = new UserTypeOnboardingService();
    }

    render(req, res) {
        this.gymCenterOnboardingService.get(req.user.id)
            .then(userTypeOnboarding => res.render("onboarding/user-onboarding"))
            .catch(err => {
                winston.error("Failed to render user user type onboarding page", err);
                res.status(500).json({});
            });
    }

    get(req, res) {
        const authHeader = req.headers.authorization;
        this.userService.getUserByAuthHeader(authHeader)
            .then(user => this.gymCenterOnboardingService.getByUserId(user.id))
            .then(userTypeOnboarding =>  res.json(userTypeOnboarding))
            .catch(err => {
                winston.error("Failed to get user onboarding", err);
                res.status(500).json(ErrorCodes.getUserTypeOnboarding);
            });
    }

    create(req, res) {
        // TODO: Create user type preference
        res.redirect("/onboarding/gym-type");
    }
}

module.exports = UserTypeOnboardingController;