const DbProvider = require('../../DBProvider');

class GymCenterPreferenceRepository {

    constructor() {
        this.db = DbProvider.getDb();
    }

    getPreferences(userId) {
        const sql = `SELECT *
                FROM gym_center_preference gcp
                WHERE user_id = $(user_id)`;
        //const sql = `SELECT *
        //        FROM gym_center_preference gcp
        //        INNER JOIN gym_center gc ON gcp user_id = $(user_id)`;
        const params = { user_id: userId };
        return this.db.query(sql, params);
    }

    createPreference(preference, userId) {
        const sql = `INSERT INTO gym_center_preference (gym_center_id, user_id, status)
                VALUES ($(gym_center_id), $(user_id), $(status))`;
        const params = {
            gym_center_id: preference.gymCenterId,
            user_id: userId,
            status: 'active'
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result);

    }

    updatePreference(preference, userId) {
        const sql = `UPDATE gym_center_preference
                SET status = $(status),
                    updated = now()
                WHERE user_id = $(user_id)`;
        const params = {
            user_id: userId,
            status: preference.status
        };
        const result = this.db.query(sql, params);
        return Try.of(() => result);
    }
}

module.exports = GymCenterPreferenceRepository;
