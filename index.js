import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/users',usersRoutes)

app.use((req,res) => {
  res.status(404);
  res.send({
    data: null,
    message: 'Route Not Found'
  })
})

app.listen(PORT, () => {
    console.log(`Example App listening at http://localhost:${PORT}`)
  })