import express from 'express'

const app = express();

const PORT = 3006;


app.get('/get-orders', (req ,res) =>
{
    const items = [{ id: 1, item: "Pizza", amount: 299 },
    { id: 2, item: "Burger", amount: 149 }]
    
  res.send(items)
})

app.post('/add-order', (req,res) =>
{
   const addItem= [{ id: 1, item: "Pizza", amount: 299 },
    { id: 2, item: "Burger", amount: 149 }]  
    res.send(addItem)
})

app.put('/update-order', (req,res) =>
{
    const updItem = [{ id: 1, item: "Pizza", amount: 299 },
    { id: 2, item: "Burger", amount: 149 }]
  
  res.send(updItem)
})

app.delete('/delete-order', (req,res) =>
{
    const delItem= [{ id: 1, item: "Pizza", amount: 299 },
    { id: 2, item: "Burger", amount: 149 }]
  
  res.send(delItem)
})

app.listen(PORT, () =>
{
    console.log(`Server running at port ${PORT}`);
    
})