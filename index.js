const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

const userRoutes = require('./routers/userRouter');
 
app.use('/myusers',userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });