import express from 'express'
import mongoose  from 'mongoose';
const app = express();

const PORT = 8000;

app.use(express.json() ) // data receive from json(postman ) to express 
const dbconnention = async() => {
  const con = await mongoose.connect('mongodb://localhost:27017/crud');
  if (con)
  {
    console.log("Database connected successfully...");
  }
  
}

dbconnention();



const useSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const userModel = mongoose.model("users", useSchema);

app.post("/add", async (req,res)=>
{
  const { name, email, phone } = req.body;
  const data =  new userModel({ name, email, phone });
  const result = await data.save();
  res.send(result)
  
})

app.get('/get-data', async (req, res) => {
  const result = await userModel.find();
  res.send(result)
});



app.delete('/del',async (req, res) =>
{
  const {email}=req.query;
  const result =  await userModel.deleteOne({ email });
  res.send(result);
});


app.put('/edit', async (req,res) =>
{
  const { name, email, phone } = req.body;
  const result =  await userModel.updateOne({ email }, { $set: { name, email, phone } });
  res.send(result);
}
)


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    
})