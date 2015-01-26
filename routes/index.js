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
router.post('/docs', function(req, res, next){
  // Generate docs
  if(req.body.hasOwnProperty('name')){
    runGruntTask('shell', function(){
      res.end();
    });
  }

});
function runGruntTask(task, cb) {
  var taskCommand = "grunt " + task;
  shell.exec(taskCommand, function(){
    console.log(task + ' was run successfully.');
    if(cb){
      cb();
    }
  });
}
module.exports = router;
