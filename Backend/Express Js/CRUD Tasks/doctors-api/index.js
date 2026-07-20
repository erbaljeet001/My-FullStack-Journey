import express from 'express'
import mongoose from 'mongoose'

const app = express();
const PORT = 3005;
app.use(express.json())
const dbConnection = async () =>
{
  const conn =  await mongoose.connect('mongodb://localhost:27017/doctorsDB');
  if (conn)
  {
      console.log(`Database Connected.....`);
      
  }
}

dbConnection();



const doctorsSchema = mongoose.Schema(
  { 

    name: String,
    specialist: String,
    hospital: String,
    mobile : String
  }
)

const doctorsModel = mongoose.model("doctors", doctorsSchema);

app.post('/add-doctor', async(req,res) =>
{
  const { name, specialist, hospital, mobile } = req.body;
    
  const data = new doctorsModel({ name, specialist, hospital, mobile });
  const result = await data.save();
  res.send(result);

})

app.get('/get-doctors', async(req,res) =>
{
  const result = await doctorsModel.find();
  res.send(result);
})


app.delete('/delete-doctor',async (req, res) =>
{
  const { name } = req.query;
  const result = await doctorsModel.deleteOne({ name })
  res.send(result);
})


app.put('/update-doctor',async(req,res) =>
{
  const { name } = req.query;
  const { specialist, hospital, mobile } = req.body;
  const result = await doctorsModel.updateOne({ name }, { $set: {specialist, hospital, mobile } });

  res.send(result);

})



app.listen(PORT,() =>
{
  console.log(`Server Running at port ${PORT}`);
  
   
})