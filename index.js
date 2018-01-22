const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'))
var obj = {test: 'testtest'};
app.get('/test_api', (req, res) => res.send(obj));

app.listen(3000, () => console.log('Example app listening on port 3000!'))
