import express from 'express'

const app = express();

const PORT = 3005

app.get('/get-doctors', (req,res) =>
{
    
  const doct = [{ id: 1, name: "Dr. Sharma", specialist: "Heart" },
  { id: 2, name: "Dr. Mehta", specialist: "Skin" }]

    res.send(doct);

})

app.post('/add-doctor', (req,res) =>
{
     const doct = [{ id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }]
  
  res.send(doct)
})



app.put('/update-doctor', (req,res) =>
{
     const doct  = [{ id: 1, name: "Dr. Sharma", specialist: "Heart" },
    { id: 2, name: "Dr. Mehta", specialist: "Skin" }]
  res.send(doct)
})

app.delete('/delete-doctor', (req,res) =>
{
   const doct = [{ id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" }
  ]
  
  res.send(doct);
})

app.listen(PORT, (req,res) =>
{
       console.log(`Server Running at Port ${PORT}`);
       
})