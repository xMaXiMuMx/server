var express = require('express'); 
var app = express(); 

app.use(express.static('public'));

app.use(function (req, res, next) { 
   console.log('Time:', Date.now()); 
   next(); 
}); 

app.use('/user/:id', function (req, res, next) { 
   console.log('Request Type:', req.method); 
   next(); 
});
  
app.get('/', function(req, res){ 
   res.send('Hello world') 
}); 

app.get('/nmd', function(req, res){ 
   res.send('NMD') 
}); 
  
app.listen(8000);
