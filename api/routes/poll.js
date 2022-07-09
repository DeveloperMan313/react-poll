const router = require("express").Router();

router.route("/new").post((req, res) => {
    res.send({
        poll: req.body,
    });
});

module.exports = router;
