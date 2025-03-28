var express = require('express'); // ESM: import
var { getHashedPassword } = require('../../models/users')
var { comparePassword } = require('../utils/authHelpers.js');
var router = express.Router();

router.post("/", (req, res) => {
    const { username, password } = req.body;
    getHashedPassword(username)
        .then((result) => {
            if (result.rows.length === 1) {
                if (comparePassword(password, result.password)) {
                    // TODO: create session
                    res.status(200).json({ message: "Login successful" });
                }
                // invalid password
                else {
                    res.status(401).json({ error: "Invalid credentials" });
                }
            }
            // user does not exist
            else {
                res.status(401).json({ error: "Invalid credentials" });
            }
        })
        // another error
        .catch((e) => {
            console.log(e);
            res.status(500);
        })
});

module.exports = router;