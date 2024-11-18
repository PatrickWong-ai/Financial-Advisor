const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Serve a simple HTML page with some CSS styling
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to TPL6213</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f4f8;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #007bff;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        a {
          text-decoration: none;
          color: #fff;
          background-color: #007bff;
          padding: 10px 20px;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
        a:hover {
          background-color: #0056b3;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to TPL6213</h1>
        <p>Hello, world! This is ELECTron from TPL6213.</p>
        <a href="/about">Learn More</a>
      </div>
    </body>
    </html>
  `);
});

// Add a new route for the "About" page
app.get('/about', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>About TPL6213</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          color: #444;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .about-container {
          text-align: center;
          background-color: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #007bff;
          font-size: 2rem;
          margin-bottom: 15px;
        }
        p {
          font-size: 1.1rem;
        }
        a {
          text-decoration: none;
          color: #007bff;
        }
      </style>
    </head>
    <body>
      <div class="about-container">
        <h2>About TPL6213</h2>
        <p>This is the TPL6213 project for demonstrating Express.js.</p>
        <p>Learn more by exploring the code!</p>
        <a href="/">Go Back Home</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
