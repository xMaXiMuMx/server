app.use(cookieParser('keyboard cat')) 
  
app.get('/ck_get', function(req, res) { 
   res.send(req.cookies) 
}) 
  
app.get('/ck_set', function(req, res) { 
   res.cookie('a', 10) 
   res.send('ok') 
})
