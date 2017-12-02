const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use('/test', (req, res)


app.get('/', (req, res) => res.send('Hello World!'));

//app.post('/examplepost', (request, response) => {
    //if (request.body === true) {
        //response.send
    //} else {
        //response.
    //}
//});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

