const express = require('express');
const router = express.Router();
const Click = require('../models/click');

router.post('/save', (req, res) => {
    let newClick = new Click ({
        email: req.body.email,
        device: req.body.device,
        geo: req.body.geo,
    });

    Click.addClick(newClick, (err, click) => {
        if(err) {
            res.json({success: false, msg: "Click has not been added."})
        }
        else {
            res.json({success: true, msg: "Click has been added."})
        }
    });
});

router.get('/get', (req, res) => {
    Click.find({}, function(err, click) {
        var userMap = {};
        click.forEach(function(click) {
          userMap[click._id] = click;
        });
       
        res.send(userMap);

      });
});

  module.exports = router;