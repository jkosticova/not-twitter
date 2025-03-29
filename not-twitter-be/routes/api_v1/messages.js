var express = require('express'); // ESM: import
var { getMessages, addMessage } = require('../../models/messages')
var router = express.Router();

router.get('/', function (req, res, next) {
    getMessages().then(
        (messages) => {
            res.json(messages.rows);
        }
    ).catch(
        (err) => {
            console.log(err);
            res.status(500).end();
        }
    );
});


router.post('/', function (req, res, next) {
    addMessage(req.body).then(
        (r) => res.status(200).end()
    ).catch(
        (e) => {
            console.log(e);
            res.status(500).end();
        }
    );
});



module.exports = router; // ESM: export
