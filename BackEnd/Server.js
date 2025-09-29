const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Indumathi@02',
  database: 'todo'
});

db.connect((err)=>{
  if(err){
    console.error('Error connecting to the database:', err);
    return
  }
  console.log('Connected to the MySQL database.');

})

app.get('/', (req, res) => {
  db.query('select * from todoItems', (err, result)=>{
    if(err){
      console.error('Error fetching data:', err);
      return
    }
    console.log('Data fetched successfully:', result);
  });
});

app.post('/add-item', (req, res) => {
    console.log(req.body);
    
    db.query(`insert into todoItems(itemDescription) values('${req.body.text}')`, (err, result)=>{
      if(err){
        console.error('Error inserting data:', err);
        return
      }
      console.log('Data:', result);
      res.send( 'result' )
    })
    
})


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});