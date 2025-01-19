const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const {getPosts, addPost} = require('./db');

const { auth, requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3001/',
    clientID: 'auvU3FS0gZMg8K671oKFhOeFgkHfr3vv',
    issuerBaseURL: 'https://dev-lzivcdxx75bygd3q.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));




app.use(cors());

app.get('/', async(req, res) => {
    const post = await getPosts();
    res.json(post)
})

app.post('/',async(req, res) => {
    const post = await getPosts();
    res.json(post)
})

app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user, 2));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})