import express from 'express'

const app = express();
const PORT = 3009

app.get('/get-hotels', (req,res) => {
     const hotels = [{ id: 1, name: "Taj Hotel", city: "Mumbai" },
    { id: 2, name: "Lemon Tree", city: "Delhi" }]
  
  res.send(hotels)
})


app.post('/add-hotel', (req,res) =>
{
    const hotel = [{ id: 1, name: "Taj Hotel", city: "Mumbai" },
    { id: 2, name: "Lemon Tree", city: "Delhi" }]
  
  res.send(hotel)
})


app.put('/update-hotel', (req,res) =>
{
   const hotel = [{ id: 1, name: "Taj Hotel", city: "Mumbai" },
    { id: 2, name: "Lemon Tree", city: "Delhi" }]
  
  res.send(hotel)
})

app.delete('/delete-hotel', (req,res) =>
{
    const hotel = [{ id: 1, name: "Taj Hotel", city: "Mumbai" },
    { id: 2, name: "Lemon Tree", city: "Delhi" }]
  
  res.send(hotel)
})

app.listen(PORT, () =>
{
  console.log(`Server Running at port ${PORT}`);
  
})