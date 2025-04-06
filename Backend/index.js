import express from "express"

import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Mysql@1108",
  database:"bookshop",

})

// if there is a auth pproblem

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Mysql@1108'

app.get("/",(req,res)=>
{
  res.json("hey, this is backend ")
})


app.get("/books",(req,res)=>
  {
 const da= "select * from shop_book"
 db.query(da,(err,data)=>
{
  if(err)
    return res.json(err)
  return res.json(data)
})
  })

app.post("/books",(req,res)=>
{
  const da = "INSERT INTO books (`title` , `desc`, `cover` ) VALUES (?)"
  const values = ["title from backend", "desc from backend", "cover picture from backend"]

  db.query(da,[values],(err,data)=>
  {
    if(err)
      return res.json(err)
    return res.json(data)
  })
})



app.listen(8800,()=>
{
  console.log("connected to beckend..")
})