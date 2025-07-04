import express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')

// create a database connection'
mongoose.connect('mongodb+srv://devsoloweb:3bkK56PRZWH3pH8v@cluster0.vx3osfa.mongodb.net/').then(()=>console.log('MongoDB Connected')).catch((error: unknown) => console.log(error));
//devsoloweb
//3bkK56PRZWH3pH8v
//mongodb+srv://devsoloweb:3bkK56PRZWH3pH8v@cluster0.vx3osfa.mongodb.net/

const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            "Auttorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter)




app.listen(PORT, ()=> console.log(`Server is now running on port ${PORT}`))