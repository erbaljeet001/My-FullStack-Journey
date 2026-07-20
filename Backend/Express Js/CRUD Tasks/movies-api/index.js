import express from 'express'
import mongoose from 'mongoose'

const app = express();
const PORT = 3007;
app.use(express.json());


app.post('/add-movie', async(req,res) =>
{
  const { name, year, language, rating } = req.body;
  const data = new moviesModel({ name, year, language, rating });
  const result = await data.save();
  res.send(result);
  
})


app.get('/get-movies',async (req,res) =>
{
  const result = await moviesModel.find(); 
  res.send(result);
})


app.delete('/delete-movie',async (req,res) =>
{
  const { name } = req.query;
  
  const result = await moviesModel.deleteOne({ name });
  res.send(result);
})

app.put('/update-movie', async (req, res) =>
{
  const { name } = req.query;
  const { year, language, rating } = req.body;
  const result = await moviesModel.updateOne({ name }, { $set: { year, language, rating } });

  res.send(result);

}
 )


const dbConnection = async () => {
  const conn =  await mongoose.connect('mongodb://localhost:27017/moviesDB')
  if (conn)
  {
     console.log(`Database Connected Successfully..`);
     
  }
}

dbConnection();


const moviesSchema = mongoose.Schema({
  name: String,
  year: String,
  language: String,
  rating : String
})

const moviesModel = mongoose.model("movies", moviesSchema);



app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
    
});