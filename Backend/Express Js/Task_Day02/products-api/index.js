import express from "express"

const app = express();

app.get('/get-products', (req,res) =>
{
    const prod = [{ id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }]
    
  res.send(prod);
})


app.post('/add-product', (req,res) =>
{
     const prod =[{ id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mouse", price: 500 }]
  
     res.send(prod)
})

app.put('/update-product', (req, res) =>
{
     const prod = [{ id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mouse", price: 500 }]
   res.send(prod)
})

app.delete('/delete-product', (req,res) =>
{
    const prod = [{ id: 1, name: "Laptop", price: 45000 },
    { id: 2, name: "Mouse", price: 500 }]
   res.send(prod)
})
const PORT = 3002;
app.listen(PORT, () =>
{
    console.log(`Server running at ${PORT} port`);
    
})
