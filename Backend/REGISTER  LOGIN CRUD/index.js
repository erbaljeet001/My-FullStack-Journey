import express from 'express'
import mongoose from 'mongoose'


const app = express();
const PORT = 8020;
app.use(express.json());

const db = async () =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/register');
  if (conn)
  {
  console.log(`database connected successfully..`);
  
  }
}

db();

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String
  }
)

const userModel = mongoose.model("users", userSchema)

app.post('/add', async (req,res) =>
{
  const { name, email, password } = req.body;
  const isExits = await userModel.findOne({ email });

  if(isExits)
  {

    res.json({
      code: 400,
      success: false,
      message: "Email already Registered",
      data : email,
      error : true,
     })
    
  }
  else {
    const data = userModel({ name, email, password });
    const result = await data.save();
     res.json({
      code: 200,
      success: true,
       message: "Registration completed Successfully",
      data : email,
      error: false,
      }) 
  }
})

app.listen(PORT, () =>
{
    console.log(`Server Running at port ${PORT}`);
    
})