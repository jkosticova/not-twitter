var pool = require('../config/db.js');

// use parametrized queries to prevent SQL injection 

// returns promise !
exports.getHashedPassword = function(username) {   
    return pool.query(
        "select * from users u where u.username = $1",
        [username]
    );
};