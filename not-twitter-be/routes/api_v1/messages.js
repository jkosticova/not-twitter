var express = require('express'); // ESM: import

var router = express.Router();

const messages = [
    {
        "id": crypto.randomUUID(),
        "userId": "123",
        "avatar": "images/person-circle.svg",
        "text": `You gotta smoke test your hypothesis to gain traction. Social currency problem territories, but
      pre launch, but core competencies. We need to dialog around your choice of work attire screw the
      pooch, for ultimate measure of success, best practices.`
    },
    {
        "id": crypto.randomUUID(),
        "userId": "123",
        "avatar": "images/person-circle.svg",
        "text": `Big picture hit the ground running. If you're not hurting you're not winning. Onward and upward,
      productize the deliverables and focus on the bottom line pig in a python circle back.`
    },
    {
        "id": crypto.randomUUID(),
        "userId": "123",
        "avatar": "images/person-circle.svg",
        "text": `Shotgun approach we're building the plane while we're flying it a set of certitudes based on
      deductions founded on false premise, but quantity, yet i called the it department about that
      ransomware because of the old antivirus, but he said that we were using avast 2021. Locked and
      loaded. We need to follow protocol workflow ecosystem.`
    },
];

router.get('/', function (req, res, next) {
    res.json(messages);
});

router.post('/', function (req, res, next) {
    messages.push(req.body);
    res.status(200);
});


module.exports = router; // ESM: export
