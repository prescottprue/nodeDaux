var express = require('express');
var router = express.Router();
var shell = require('shelljs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daux Server' });
});
router.post('/run', function(req, res, next){
  runGruntTask('', function(){
    res.end();
  });
});
function runGruntTask(task, cb) {
  var taskCommand = "grunt" + task;
  shell.exec(task, function(){
    console.log(task + ' was run successfully.');
    if(cb){
      cb();
    }
  });
}
module.exports = router;
