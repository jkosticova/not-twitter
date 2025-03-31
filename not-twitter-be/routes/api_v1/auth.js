var express = require('express'); // ESM: import
var { getHashedPassword } = require('../../models/users')
var { comparePassword } = require('../../utils/authHelpers.js');
var router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    getHashedPassword(username)
        .then((result) => {            
            if (result.rows.length === 1) {                
                const userId = result.rows[0].user_id;
                const hashedPassword = result.rows[0].password;                
                comparePassword(password, hashedPassword)
                    .then((isValid) => {
                        if (isValid) {
                            req.session.userId = userId;  // creates session
                            return res.status(200).end();
                        }
                        // invalid password
                        else {
                            console.log("Invalid password");
                            return res.status(401).end();
                        }
                    })
                    .catch((e) => { 
                        console.log(e); 
                        // internal server error
                        res.status(500).end(); 
                    })
            }
            // user does not exist
            else {
                console.log("User does not exist");
                return res.status(401).end();
            }
        })
        .catch((e) => {
            console.log(e);
            return res.status(500).end();
        })
});

module.exports = router;