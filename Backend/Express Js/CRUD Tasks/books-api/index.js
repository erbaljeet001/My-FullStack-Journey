import express from 'express'
import mongoose from 'mongoose'

const app = express();
const PORT = 3004;
app.use(express.json())
const dbConnection = async () =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/booksDB');
  if (conn)
  {
      console.log("Database Connected Successfully...");
      
  }
}
dbConnection();
const booksSchema = mongoose.Schema(
  {
    title: String,
    author: String,
    price: String,
    pages: String
  }
)

const booksModel = mongoose.model("books", booksSchema);

app.post('/add-book',async (req,res) =>
{
  const { title, author, price, pages } = req.body;
  const data = new booksModel({ title, author, price, pages });
  const result = await data.save();
  res.send(result);
})

app.get('/get-books',async (req,res) =>
{
  const result = await booksModel.find();
  res.send(result);
})

app.delete('/delete-book', async (req, res) => {
  const { title } = req.query;
  const result = await booksModel.deleteOne({ title });
  res.send(result);
})

app.put('/update-book',async (req,res) =>
{    
  const { title } = req.query;
  const { author, price, pages } = req.body;

  const result = await booksModel.updateOne({ title }, { $set: { author, price, pages } })
  res.send(result);
})

app.listen(PORT, () =>
{
  console.log(`Server running at port ${PORT}`);
  
   
})