import express from "express"

import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Mysql@1108",
  database:"bookshop",

})
app.use(express.json())



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
  const da = "INSERT INTO books (`title` , `desc`, `cover`,`price` ) VALUES (?)"
  const values = ["title from backend", "desc from backend", "cover picture from backend","price"]

  db.query(da,[values],(err,data)=>
  {
    if(err)
      return res.json(err)
    return res.json(data,"books successfully...")
  })
})



app.listen(8800,()=>
{
  console.log("connected to beckend..")
})