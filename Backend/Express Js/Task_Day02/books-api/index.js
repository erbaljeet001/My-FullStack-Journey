import express from 'express'

const app = express();

const PORT = 3004;

app.get('/get-books', (req,res) =>
{
    const book = [{ id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "Node Guide", author: "Smith" }]
  
  res.send(book);
})

app.post('/add-book', (req,res) =>
{
     const book = [{ id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "Node Guide", author: "Smith" }]
  
   res.send(book)
})

app.put('/update-book', (req,res) =>
{
     const book = [{ id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "Node Guide", author: "Smith" }]
  
  res.send(book)
})


app.delete('/delete-book', (req,res) =>
{
    const book = [{ id: 1, title: "React Basics", author: "John" },
    { id: 2, title: "Node Guide", author: "Smith" }]
  
   res.send(book)
})
app.listen(PORT, () =>
{
      console.log(`Server running at port ${PORT}`);
      
})