const RouteType = require("../routing/RouteTypeEnum");
const Method = require("../routing/HttpMethodEnum");

module.exports = {
    startOnboarding: { type: RouteType.web, method: Method.get, href: "/onboarding" },
};
