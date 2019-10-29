let  express  =  require('express')  
let  app  =  express()  
let path = require('path');
let router = express.Router();
let bodyParser = require('body-parser')
let fs = require('fs');

// var data = fs.readFileSync('artists.json')
// var artists = JSON.parse(data);


app.get('/',   (req,  res)  =>  {
    //res.status(404).send('File not found');
    res.sendFile(path.join(__dirname + '/index.html'));
})

  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);

    var bodyData = req.body;

    fs.readFile('artists.json', (err, currData) => {
        var objArr = JSON.parse(currData);
        objArr.artists.push(bodyData);

        fs.writeFile('artists.json', JSON.stringify(objArr, null, 2), (err) => {
            if (err) throw err;

        });

        if (err) throw err;


    })


    res.redirect('/');
})

app.post('/del', function(req, res) {
    console.log("NAME DELETING: " + req.body.name);

    var nameToDel = req.body.name;

    fs.readFile('artists.json', (err, currData) => {
        var objArr = JSON.parse(currData);


        for (var i in objArr.artists) {
            if (objArr.artists[i].name == nameToDel) {
                objArr.artists.splice(i, 1);
                console.log(objArr);
                break;

            }
        }

        fs.writeFile('artists.json', JSON.stringify(objArr, null, 2), (err) => {
            if (err) throw err;

        });
        if (err) throw err;

    })


    res.redirect('/');
})

app.get('/artists', (req, res) => {
    let data = require('./artists.json');
    res.json(data);

})


app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
//app.use('/', router);



app.listen(3000,   ()  =>  console.log('Server ready')) 