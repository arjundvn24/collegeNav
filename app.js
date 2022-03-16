require('dotenv').config()
const express=require('express')
const app=express();
var mysql = require('mysql');
app.use(express.static('public'))
const PORT=process.env.PORT
app.set('view-engine','ejs')
app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',	
    database: 'colleges'
  });
  
app.get('/', (req, res) => {
    connection.query(
      'SELECT * FROM collegeData',
      (error, results) => {
          // console.log(results)
        res.render('index.ejs', { cols: results });
      }
    );
  });
  app.get('/info/:url',function(req, res) {
    let url = req.params.url;
  
    // let agreement = // go fetch the agreement from the database like you did before with the list of agreements
    // console.log(url)
    connection.query(`select * from collegeData where Name='${url}'`,(error, results) => {
      // console.log(results[0])
      res.render('info.ejs',{ data: results[0]})
  })
  })
app.listen(PORT,(err)=>{
    console.log(`Connected to ${PORT}`);
});