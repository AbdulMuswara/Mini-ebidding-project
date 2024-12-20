const express = require('express'); // Import Express
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const db = require('./db.js'); // Import the MySQL connection pool from db.js
const usersRouter = require('./routes/Users'); // Import the users router
const adminRouter = require('./routes/Admin'); // Import the admin router
const bidRouter = require('./routes/Bids'); // Import the bids router
const listingsRouter = require('./routes/Listings'); // Import the listings router
const sellerRouter = require('./routes/Seller'); // Import the seller router
const ratingRouter = require('./routes/Rating'); // Import the rating router
const commentsRouter = require('./routes/Comments'); // Import the comments router
const specialRouter = require('./routes/Special'); // Import the special router

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from React app
  credentials: true,
}));


app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(usersRouter);
app.use(adminRouter);
app.use('/listings', listingsRouter);
app.use(bidRouter);
app.use(sellerRouter);
app.use(ratingRouter);
app.use('/', commentsRouter);
app.use(specialRouter);

// Start the server
app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});

