import express from 'express'
import mongoose from 'mongoose'

const app = express();
const PORT = 8001;
app.use(express.json())
const dbCon = async (req,res) =>
{
  const conn =await mongoose.connect('mongodb://localhost:27017/authDB');
  if (conn)
  {
     console.log(`Database Connected Successfully..`);
     
  }
}

dbCon();

const  userSchema = mongoose.Schema({
  name: String,
  email: String,
  password : String
})

const userModel = mongoose.model("user", userSchema);

app.post('/register', async(req,res) =>
{
  const { name, email, password } = req.body;
  const isMatch = await userModel.findOne({ email });

  if (isMatch)
  {
    res.json({
      code: 400,
      success: false,
      message: "Your Email is Already Registered",
      data: isMatch,
      error : true,
      })
  }
  else {
    const data = new userModel({ name, email, password });
    const result = data.save();
    res.json({
      code: 200,
      success: true,
      message: "Registration Successfully",
      data: data,
      error: false ,
    })
      
  }

})




app.post('/login', async (req, res) => {
  const { name, email, password } = req.body;
  const isExits = await userModel.findOne({ email, password });
  if (isExits)
  {
    res.json({
      code:200,
      success: true,
      message: "Login Successfully",
      data: isExits,
      error : false ,
    })
  }
  else {
    
    res.json({
      code:400,
      success: false,
      message: "Login Failed",
      data: [],
      error : true ,
    })
  
  
  }
});


app.listen(PORT, () =>
{
   console.log(`Server running at port ${PORT}`);
   
});