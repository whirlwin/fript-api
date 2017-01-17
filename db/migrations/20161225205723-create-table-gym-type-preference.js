'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function(db, cb) {
    db.createTable('gym_type_preference', {
        id: { type: 'int', primaryKey: true, autoIncrement: true },
        gym_type_id: { type: 'int', notNull: true },
        user_id: { type: 'string', notNull: true },
        status: { type: 'string', notNull: true, },
        created: { type: 'date', defaultValue: 'now()' },
        updated: { type: 'date', defaultValue: 'now()' }
    }, cb);
};

exports.down = function(db) {
    return null;
};

exports._meta = {
    "version": 1
};
