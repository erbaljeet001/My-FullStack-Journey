import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3003;
app.use(express.json())
const dbConnection = async () =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/employeesDB');
  if (conn)
  {
     console.log("Database Connected....");
     
  }
  
}

dbConnection();

const employeesSchema = mongoose.Schema(
  {
       name : String,
       department : String,
         salary : String,
    city: String,
         
  }
)

const employeeModel = new mongoose.model("employees", employeesSchema);

app.post('/add-employee', async(req,res) =>
{
  const { name, department, salary, city } = req.body;
  const data = new employeeModel({ name, department, salary, city });
  const result = await data.save();
  
  res.send(result);
})


app.get('/get-employees', async(req,res) =>
{
  const result = await employeeModel.find();
  
  res.send(result)
})


app.delete('/delete-employee',async(req,res) =>
{
  const { name } = req.query;
  
  const result = await employeeModel.deleteOne({ name })
  res.send(result);
})

app.put('/update-employee',async (req,res) =>
{
  const { name } = req.query;
  const { department, salary, city }= req.body;
  const data = await employeeModel.updateOne({ name }, { $set: { department, salary, city } });

  res.send(data);

   
})
app.listen(PORT, () =>
{
    console.log(`Server working at port ${PORT}`);
    
})