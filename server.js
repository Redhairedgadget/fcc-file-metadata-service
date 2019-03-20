// init project
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/check', upload.single('file'), function(req, res){
  res.json({    
    'name' : req.file.originalname,
    'type' : req.file.mimetype,
    'size' : req.file.size
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
