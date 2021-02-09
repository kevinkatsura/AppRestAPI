var mysql = require('mysql');

//Buat koneksi database
const conn = mysql.createConnection({
    host:'root',
    user:'root',
    password:'',
    database:'dbrestapi'
})

conn.connect((err)=>{
    try{
    console.log('mysql terkoneksi');
    }catch(err){console.log(err);}
});

module.exports = conn;