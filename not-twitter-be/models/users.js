var pool = require('../config/db.js');

// returns promise !
exports.getHashedPassword = function(username) {   
    return pool.query(
        "select * from users u where u.username = $1",
        [username]
    );
};