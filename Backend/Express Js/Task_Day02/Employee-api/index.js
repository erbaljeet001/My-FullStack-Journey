import express from 'express'

const app = express();
const PORT = 3003;

app.get('/get-employees', (req,res) =>
{
   const emp = [{ id: 1, name: "Amit", department: "IT" },
    { id: 2, name: "Neha", department: "HR" }]
  
  res.send(emp)
})

app.post('/add-employee', (req,res) =>
{ 
    const emp = [{ id: 1, name: "Amit", department: "IT" },
    { id: 2, name: "Neha", department: "HR" }] 
  
  res.send(emp)
})


app.put('/update-employee', (req,res) =>
{
     const emp = [{ id: 1, name: "Amit", department: "IT" },
    { id: 2, name: "Neha", department: "HR" }]
  
  res.send(emp);
})


app.delete('/delete-employee', (req,res) =>
{
    const emp = [{ id: 1, name: "Amit", department: "IT" },
    { id: 2, name: "Neha", department: "HR" }]  
  
  res.send(emp);
})

app.listen(PORT,()=>
  {
     console.log(`server running at port ${PORT}`);
     
})