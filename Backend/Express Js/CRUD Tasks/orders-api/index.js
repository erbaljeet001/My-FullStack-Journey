import express from 'express'
import mongoose from 'mongoose'

const app = express();

const PORT = 3006;
app.use(express.json())
app.listen(PORT, () =>
{
   console.log(`Server running at port ${PORT}`);
   
})

const dbConnection = async (req, res) =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/ordersDB');

  if (conn)
  {
    console.log(`Database Connected Successfully...`);   
  }
  
}

dbConnection();


const ordersSchema = mongoose.Schema(
  {
    item: String,
    amount: String,
    status: String,
    customer :String
  }
);

const ordersModel = mongoose.model("orders", ordersSchema);



app.post('/add-order', async(req, res) =>
{
  const { item, amount, status, customer } = req.body;
  const data = new ordersModel({ item, amount, status, customer });
  const result = await data.save();
  res.send(result);
})


app.get('/get-orders',async(req, res) =>
{
  const result = await ordersModel.find();
  res.send(result);
})


app.delete('/delete-order',async(req,res) =>
{    
  const { item } = req.query;
  const result = await ordersModel.deleteOne({ item })
  res.send(result);
})

app.put('/update-order',async(req,res) =>
{
  const { item } = req.query;
  const {  amount, status, customer } = req.body;

const result =  await ordersModel.updateOne({ item }, { $set: { amount, status, customer } });
  res.send(result);

})