var pool = require('../config/db.js');

exports.getMessages = function(userId) {
    return pool.query(`
        select m.*, u.avatar
        from messages m
        left join users u on m.user_id=u.id
        where u.id = $1
    `, [userId]);
};

exports.addMessage = function(message, userId) {
    console.log("insert into messages(id, user_id, text) values($1, $2, $3)", 
        [message.id, userId, message.text]);     
    return pool.query("insert into messages(id, user_id, text) values($1, $2, $3)", 
[message.id, userId, message.text]);    
};
