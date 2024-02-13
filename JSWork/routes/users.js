var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

module.exports = router;
router.get('/example',
    function(request,response){
        response.send('I am example');
        console.log('I am example');
    }
);
