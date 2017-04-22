const bodyParser = require('body-parser');
const express = require('express');

class ExpressConfig {

    configure() {
        const app = express();
        app.use(bodyParser.json());
        if (process.env.ENV === "dev") {
            app.set('json spaces', 2);
        }
        app.use(bodyParser.urlencoded({ extended: true }));
        return app;
    }
}

module.exports = ExpressConfig;
