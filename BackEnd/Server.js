const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send( 'default ' );
});

app.post('/add-item', (req, res) => {
    console.log(req.body);
    res.send( 'Data received successfully' );
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});