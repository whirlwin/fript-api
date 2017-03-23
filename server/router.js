const express = require('express');
const Paths = require('./paths');
const GymCenterPreferenceController = require('./gym-center/preference/GymCenterPreferenceController');
const GymTypePreferenceController = require('./gym-type/preference/gym-type-preference-controller');
const OnboardingController = require('./onboarding/onboarding-controller');
const MatchController = require('./match/match-controller');
const PendingMatchController = require('./match/pending-match/pending-match-controller');
const ServiceDocController = require('./service-doc-controller');
const UserController = require('./user/user-controller');

class Router {

    constructor() {
        this.router = express.Router();

        this.gymCenterPreferenceController = new GymCenterPreferenceController();
        this.gymTypePreferenceController = new GymTypePreferenceController();
        this.onboardingController = new OnboardingController();
        this.serviceDocController = new ServiceDocController();
        this.userController = new UserController();
        this.matchController = new MatchController();
    }

    route(app) {
        this.router.get(Paths.root.href,
            this.serviceDocController.getServiceDoc);

        this.router.get(Paths.logIn.href,
            this.userController.logIn);

        this.router.get(Paths.getGymTypeOnboarding.href,
            this.onboardingController.getGymTypeOnboarding);

        this.router.get(Paths.getGymCenterOnboarding.href,
            this.onboardingController.getGymCenterOnboarding);

        this.router.get(Paths.getUserOnboarding.href,
            this.onboardingController.getUserOnboarding);

        this.router.put(Paths.updateGymCenterPreference.href,
            this.gymCenterPreferenceController.updatePreference);

        this.router.get(Paths.getGymTypePreferences.href,
            this.gymTypePreferenceController.getPreferences);

        this.router.post(Paths.createGymTypePreference.href,
            this.gymTypePreferenceController.createPreference);

        this.router.get(Paths.createGymCenterPreference.href,
            this.gymCenterPreferenceController.createPreference);

        this.router.put(Paths.updateGymTypePreference.href,
            this.gymTypePreferenceController.updatePreference);

        this.router.get(Paths.getMatches.href,
            this.matchController.getMatches);

        this.router.get(Paths.getPendingMatches.href,
            this.pendi)

        app.use(this.router);
    }
}

module.exports = Router;

