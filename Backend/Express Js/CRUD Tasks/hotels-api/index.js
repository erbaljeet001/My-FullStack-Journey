import express from "express";
import mongoose, { model } from "mongoose";

const app = express();
const PORT = 3009;

app.use(express.json())


const dbConnection = async () =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/hostelsDB');
  if (conn)
  {
      console.log(`Database Connected......`);
      
  }
}
   
dbConnection();

const hotelsSchema = mongoose.Schema(
  {
    name: String,
    city :String,
    price: String,
    rooms: String,
    
    }
)
  
const hotelsModel = mongoose.model('hotels', hotelsSchema);


app.post('/add-hotel', async (req, res) =>
{
  const { name, city, price, rooms } = req.body;
  const data = new hotelsModel({ name, city, price, rooms });
  const result = await data.save();
  res.send(result);
})
app.get('/get-hotels', async (req, res) =>
{
  const result = await hotelsModel.find();
  res.send(result)
})


app.delete('/delete-hotel', async (req, res) =>
{
  const { name } = req.query;
  const result = await hotelsModel.deleteOne({ name });
  res.send(result)
})

app.put('/update-hotel', async (req, res) =>
{
  const { name } = req.query;
  const { city, price, rooms } = req.body;
  const result = await hotelsModel.updateOne({ name }, { $set: { city, price, rooms } })
  res.send(result)
})

app.listen(PORT, () =>
{
   console.log(`Server run at port ${PORT}`);
   
})