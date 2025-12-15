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
            real_pass:password,
            password:hashed_pass,
            role:role || 'user'
        })

        res.json({success:true , message:"User Created Successfuly"})
    }

    catch(err){
        res.status(500).json({success:false,error:err.message})
    }
})



// auth_router.post('/register', async (req, res) => {
//   try {
//     // 1. Check if admin already exists
//     const existingAdmin = await User.findOne({
//       where: { email: 'admin3434@gmail.com' }
//     });

//     if (existingAdmin) {
//       return res.status(409).json({
//         success: false,
//         message: 'Admin already exists',
//       });
//     }

//     // 2. Create admin
//     await User.create({
//       name: 'ADMIN',
//       email: 'admin3434@gmail.com',
//       real_pass:'admin@1234',
//       password: await bcrypt.hash('admin@1234', 10),
//       role: 'admin',
//     });

//     console.log('Admin created successfully');

//     res.status(201).json({
//       success: true,
//       message: 'Admin created successfully',
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: err.message,
//     });
//   }
// });




auth_router.post('/login',async(req,res)=>{
    const {email,password}=req.body

    try{
        const user=await User.findOne({where:{email}})

        if(!user) return res.status(404).json({success:false , message:"User Does Not Exist"})

        const match = await bcrypt.compare(password,user.password)
        if(!match) return res.status(401).json({success:false , message:"The password was incorrect"})

        const token =jwt.sign({id:user.id , role:user.role },
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )

        res.json({ success: true, token, name: user.name, role: user.role})
    }
    catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
})
