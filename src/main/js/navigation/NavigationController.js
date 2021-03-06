const hal = require('hal');
const Paths = require('../routing/ApiPathCollection');

class NavigationController {

    getServiceDoc(req, res) {
        const root = new hal.Resource();

        for (const path in Paths) {
            for (const route in path) {
                root.link(route.href, { href: PathConstants[rel].href });
            }
        }

        // Cache service document for 5 minutes
        res.set('Cache-Control', 'public, max-age=300');
        res.send(root.toJSON());
    }
}

module.exports = NavigationController;
