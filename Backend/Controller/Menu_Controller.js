// API for Menu 

import { Menu } from "../Models/Menu_Item_Model.js";

export const getallItems = async (req,res) => {
    try{
        const items = await Menu.find()
        res.status(200).json({success:true , data:items})
    }
    catch(error){
        res.status(500).json({success:false,messsage:"Something Went Wrong"})
    }
}

export const getallItemsbyId= async (req,res) => {
    try{
        const itemsbyId = await Menu.findById(req.params.id)
        if(!itemsbyId){
            res.status(404).json({success:false,messsage:"Product not Found"})
        }
        res.status(200).json({success:true,data:itemsbyId})
    }
    catch(error){
        res.status(500).json({success:false,messsage:"Something Went Wrong"})
    }
    
}

export const createnewproduct = async (req,res) => {
    try {
        const createProdcut = new Menu(req.body)
        const saveProduct = createProdcut.save()
        res.status(200).json({success:true,data:saveProduct})
    }
    catch(error){
        res.status(500).json({success:true,messsage:"Something Went Wrong"})
    }
}