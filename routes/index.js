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
  if(req.body.hasOwnProperty('name')){
    shell.exec('php generate.php global.json static', function(){
      console.log('Docs generated for ', req.body.name);
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
