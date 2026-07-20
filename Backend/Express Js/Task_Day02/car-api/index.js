import express from "express";

const app = express();
const PORT = 3008;


app.get('/get-cars', (req, res) =>
{
    const cars = [{ id: 1, brand: "Honda", model: "City" },
    { id: 2, brand: "Maruti", model: "Swift" }]
  res.send(cars)
})

app.post('/add-car', (req,res) =>
{
    const car = [{ id: 1, brand: "Honda", model: "City" },
    { id: 2, brand: "Maruti", model: "Swift" }]
  res.send(car)
})

app.put('/update-car', (req,res) =>
{
    const car = [{ id: 1, brand: "Honda", model: "City" },
    { id: 2, brand: "Maruti", model: "Swift" }]
  res.send(car)
})

app.delete('/delete-car', (req,res) =>
{
     const car = [{ id: 1, brand: "Honda", model: "City" },
    { id: 2, brand: "Maruti", model: "Swift" }]
  res.send(car)
})


app.listen(PORT, () =>

{
    console.log(`Server Running at port ${PORT}`);
    
})