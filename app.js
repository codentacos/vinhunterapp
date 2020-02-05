require('dotenv').config();

var request = require('request'),
    express = require('express'),
    bodyParser = require('body-parser'),
    apiKey = process.env.RAPID_API_KEY;
    app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// ROUTES
app.get('/', function(req, res) {
    res.redirect('search');
});

// SEARCH VIN ROUTE
app.get('/search', function(req, res) {
    res.render('search');
});

// SHOW CAR DATA ROUTE
app.get('/car', function(req, res) {
    var vinData = req.query.vindata;
    var options = {
        method: 'GET',
        url: 'https://vindecoder.p.rapidapi.com/decode_vin',
        qs: {vin: vinData},
        headers: {
            'x-rapidapi-host': 'vindecoder.p.rapidapi.com',
            'x-rapidapi-key': apiKey
          }
    };

    request(options, function(err, response, body) {
        if (!err && response.statusCode === 200) {
            const data = JSON.parse(body);
            res.render('car', { data: data });
        } else {
            console.log('Error: ' + err);
                res.redirect('/error');
        }
    });
    // res.render('car');
});

app.get('/error', function(req, res) {
    res.render('error');
})

app.listen(process.env.PORT || 3000, function() {
    console.log('Server listening');
});