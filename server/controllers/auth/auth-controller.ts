const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../../models/User')

// register

export const registerUser = async(req:any, res:any) => {
    const {email, userName, password} = req.body;

    try{
        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            email, 
            userName, 
            password: hashPassword,
        })

        await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Your account is created'
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        })
    }
}



// login

const login = async(req:any, res:any) => {
    const {email, password} = req.body;

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: 'Some error occurred'
        })
    }
}


