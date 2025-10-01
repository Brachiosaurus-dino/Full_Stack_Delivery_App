// Controller (API) for Menu 

import { Menu } from "../Models/Menu_Item_Model.js";

export const getallItems = async (req,res) => {
    try{
        const products = await Menu.find()
        res.status(200).json({success:true , data:products})
    }
    catch(error){
        res.status(500).json({success:false,messsage:"Something Went Wrong"})
    }
}

export const getallItemsbyId= async (req,res) => {
    try{
        const productbyId = await Menu.findById(req.params.id)
        if(!productbyId){
            res.status(404).json({success:false,messsage:"Product not Found"})
        }
        res.status(200).json({success:true,data:productbyId})
    }
    catch(error){
        res.status(500).json({success:false,messsage:"Something Went Wrong"})
    }
    
}

export const createnewItem = async (req,res) => {
    try {
        const createProdcut = new Menu(req.body)
        const saveProduct = createProdcut.save()
        res.status(200).json({success:true,data:saveProduct})
    }
    catch(error){
        res.status(500).json({success:true,messsage:"Something Went Wrong"})
    }
}

export const updateItem= async (req,res) => {
    try{
        const updateproducts = await Menu.findByIdAndUpdate(req,params.id , req.body , {new :true})
        if(!updateproducts){
            res.status(404).json({success:false , messsage:"Product not Found"})

        }
        res.status(200).json({success:true , data:updateproducts })
    }
    catch{
        res.status(500).json({success:false , messsage:"Something Went Wrong"} )
    }
}

export const deleteItem = async (req,res) => {
    try{
        const deleteProduct = await Menu.findByIdAndDelete(req.params.id)
        if(!deleteProduct){
            res.status(404).json({success:false , messsage:"Product not Found"})
        }
        res.status(200).json({success:true,data:"Product Deleted sucessfully"})
    }
    catch{
        res.status(500).json({success:false , messsage:"Something Went Wrong"})
    }
}