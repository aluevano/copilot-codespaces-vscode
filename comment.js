// Create web server 
// 1. create a web server
// 2. create a route
// 3. create a route handler
// 4. send a response

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 1. create a web server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// 2. create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// 3. create a route handler
app.get('/about', (req, res) => {
    res.send('About Us');
});

// 4. send a response
app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

// 5. send a response
app.get('/service', (req, res) => {
    res.send('Our Services');
});

// 6. send a response
app.get('/blog', (req, res) => {
    res.send('Our Blog');
});

// 7. send a response
app.get('/comment', (req, res) => {
    res.send('Comment Page');
});

// 8. send a response
app.get('/post', (req, res) => {
    res.send('Post Page');
});

// 9. send a response
app.get('/product', (req, res) => {
    res.send('Product Page');
});

// 10. send a response
app.get('/cart', (req, res) => {
    res.send('Cart Page');
});

// 11. send a response
app.get('/checkout', (req, res) => {
    res.send('Checkout Page');
});

// 12. send a response
app.get('/payment', (req, res) => {
    res.send('Payment Page');
});

// 13. send a response
app.get('/order', (req, res) => {
    res.send('Order Page');
});

// 14. send a response
app.get('/invoice', (req, res) => {
    res.send('Invoice Page');
});

// 15. send a response
app.get('/profile', (req, res) => {
    res.send('Profile Page');
});

// 16. send a response
app.get('/setting', (req, res) => {
  res.send('Setting Page');
});
