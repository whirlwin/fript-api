const express = require('express');
const Paths = require('../paths');
const OnboardingController = require('./OnboardingController');
const UserMiddlware = require('../user/UserMiddleware');

const router = express.Router();
const onboardingController = new OnboardingController();
const userMiddlware = new UserMiddlware();

router.get(Paths.getUserOnboarding.href, userMiddlware.getUserByAuthHeader.bind(userMiddlware), onboardingController.getUserTypeOnboarding.bind(onboardingController));
router.get(Paths.getGymTypeOnboarding.href, onboardingController.getGymTypeOnboarding.bind(onboardingController));
router.get(Paths.getGymCenterOnboarding.href, onboardingController.getGymCenterOnboarding.bind(onboardingController));

module.exports = router;