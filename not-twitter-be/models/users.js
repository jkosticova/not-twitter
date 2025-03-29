var pool = require('../config/db.js');

exports.getHashedPassword = function(username) {   
    return pool.query(
        "select password from users u where u.username = $1",
        [username]
    );
};