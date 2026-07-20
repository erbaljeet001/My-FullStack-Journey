import express from 'express'

const app = express();
const PORT = 3001;


app.get('/get-students', (req,res) =>
{
  const info = [{ id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Priya", course: "MCA" }];
  
  res.send(info);
  
})

app.post('/add-student', (req,res) =>
{
      const info = [{ id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Priya", course: "MCA" }];
  
  res.send(info);
     
})

app.put('/update-student', (req,res) =>
{
    const info = [{ id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Priya", course: "MCA" }];
  res.send(info);
})

app.delete('/delete-student', (req, res) =>
{
   const info = [{ id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Priya", course: "MCA" }];
  
   res.send(info)
})
app.listen(PORT, () =>
{
    console.log(`Server Running at ${PORT} port`);
    
})