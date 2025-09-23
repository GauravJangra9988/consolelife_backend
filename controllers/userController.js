import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const registerUser = async (req, res) => {
    const {email,password} = req.body;
    console.log(email,password);
    try {

        const findEmail = await User.findOne({email:email});
        if(findEmail) {
            console.log("User already exists");
            return res.status(400).json({message: "User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User({email:email, password: hashedPassword});
        await newUser.save()
            
        console.log("User registered successfully");
        res.status(201).json({message: "User registered successfully"});
        
    } catch(error){
        console.log({message: "Error registering user",error: error.message});
        res.status(500).json({message: "Error registering user",error: error.message});
    }


}

export const loginUser = async (req, res) =>{
    
    const {email,password} = req.body;
    try
    {
    console.log(email,password);
    const findUser = await User.findOne({email:email});
    if(!findUser){
        console.log("User not found");
        return res.status(400).json({message: "User not exists"})
    }
    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if(!isPasswordValid){
        console.log("Password is not valid");
        return res.status(400).json({message:"Invalid Credentials"});
        
    }
    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token',token);
    res.status(200).json({message: "Login Successful", token:token});
    console.log("User login successful");
}

    catch(error){
        console.log("Error log in",error.message);
        res.status(500).json({message: "Error login in", error:error.message})
    }

}