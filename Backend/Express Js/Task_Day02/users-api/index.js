import express from "express";

const app = express();
const PORT = 3010;


app.get('/get-users', (req,res) =>
{
    const users= [{ id: 1, name: "Ravi", email: "ravi@gmail.com" },
    { id: 2, name: "Sneha", email: "sneha@gmail.com" }]
  
  res.send(users)
})

app.post('/add-user', (req,res) =>
{
    const user= [{ id: 1, name: "Ravi", email: "ravi@gmail.com" },
    { id: 2, name: "Sneha", email: "sneha@gmail.com" }]
  
  res.send(user)
})

app.put('/update-user', (req,res) =>
{
    const user= [{ id: 1, name: "Ravi", email: "ravi@gmail.com" },
    { id: 2, name: "Sneha", email: "sneha@gmail.com" }]
  
  res.send(user)
})

app.delete('/delete-user', (req,res) =>
{
    const user= [{ id: 1, name: "Ravi", email: "ravi@gmail.com" },
    { id: 2, name: "Sneha", email: "sneha@gmail.com" }]
  
  res.send(user)
})
app.listen(PORT, () =>
  {
    console.log(`Server running at port ${PORT}`);
    
})