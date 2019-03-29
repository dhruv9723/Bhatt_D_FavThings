var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //data from db and send it through route
  // to index.hbs page  and render it with DB data
  connect.query(`SELECT name, avatar FROM hero`, (err,result) => {

    if(err){
      throw err;
      console.log(err);
    }else {
      console.log(result);
      res.render('index', { avatars: result});
    }
  });

});

// bio info for hero
router.get('/:hero', function(req, res, next) {

  //data from db and send it through route
  // to index.hbs page  and render it with DB data
  connect.query(`SELECT * FROm hero WHERE name="${req.params.hero}"`, (err,result) => {

    if(err){
      throw err;
      console.log(err);
    }else {
      console.log(result);
      res.render('bio', { bioData: result[0]});
    }
  });

});

module.exports = router;
