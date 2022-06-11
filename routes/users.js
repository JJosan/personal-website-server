var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    one: "one",
    two: "two",
    three: "three"
  })
});

module.exports = router;
