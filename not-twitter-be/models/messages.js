var pool = require('../config/db.js');

// use parametrized queries to prevent SQL injection 

// returns promise !
exports.getMessages = function (userId) {    
    return pool.query(`
        WITH friends_of_user AS (
            SELECT user2_id AS friend_id FROM public.friends WHERE user1_id = $1
            UNION 
            SELECT user1_id AS friend_id FROM public.friends WHERE user2_id = $1
        )
        SELECT 
            m.*,
            u.username,
            u.avatar
        FROM public.messages m
        JOIN public.users u ON m.author = u.user_id
        WHERE m.author = $1
        OR m.author IN (SELECT friend_id FROM friends_of_user);
    `, [userId]);
};

// returns promise !
exports.addMessage = function (message, userId) {      
    return pool.query("insert into messages(message_id, author, text) values($1, $2, $3)",
        [message.message_id, userId, message.text]);
};
