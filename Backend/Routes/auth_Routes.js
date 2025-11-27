import express from 'express'
import bycrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../Models/User_Model.js'
import bcrypt from 'bcryptjs'
import dotenv from "dotenv";


dotenv.config();


export const auth_router=express.Router()





auth_router.post('/register',async (req,res)=>{
    const {name , email , password , role} =req.body

    try{
        const hashed_pass = await bycrypt.hash(password,10)

        await User.create({
            name ,
            email,
            password:hashed_pass,
            role:role || 'user'
        })

        res.json({success:true , message:"Use Created Successfuly"})
    }

    catch(err){
        res.status(500).json({success:false,error:err.message})
    }
})





auth_router.post('/login',async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await User.findOne({where:{email}})

        if(!user) return res.status(404).json({success:false , message:"User Does Not Exist"})

        const match = await bcrypt.compare(password,user.password)
        if(!match) return res.status(401).json({success:false , message:"The password was incorrect"})

        const token =jwt.sign({id:user.id , role:user.role },
            process.env.JWT_SECRET || 'secret9029',
            {expiresIn:"7d"}
        )

        res.json({ success: true, token, name: user.name, role: user.role})
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
})
