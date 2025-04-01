var express = require('express'); // ESM: import
var { getMessages, addMessage } = require('../../models/messages')
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log(req.session);
    console.log(req.sessionID);
    if (req.session && req.session.userId) {
        getMessages(req.session.userId)
            .then(
                (messages) => {
                    res.status(200).json(messages.rows);
                })
            .catch(
                (err) => {
                    console.log(err);
                    // internal server error
                    res.status(500).end();
                })
    }
    // unauthorized
    else {
        res.status(401).end();
    }
});

router.post('/', function (req, res, next) {
    console.log(req.session);
    console.log(req.sessionID);
    if (req.session && req.session.userId) {
        addMessage(req.body, req.session.userId)
            .then(
                (r) => res.status(200).end()
            )
            .catch(
                (e) => {
                    console.log(e);
                    // internal server error
                    res.status(500).end();
                }
            );
    }
    // not authenticated
    else {
        res.status(401).end();
    }
});

module.exports = router; // ESM: export
