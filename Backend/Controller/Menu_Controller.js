// Controller (API) for Menu 

import { Menu } from "../Models/Menu_Item_Model.js"



export const getallItemsbyId= async (req,res) => {      // This controller is working perfect ............... DONE 
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

export const getItems = async(req,res) => {     // This controller is working perfect ............... DONE 
    try{
        const getProducts= await Menu.find()
        if(!getProducts){
            res.status(404).json({success:false , message:"Product not Found"})
        }
        res.status(200).json({success:true , data:getProducts})  
    }
    catch(error){
        res.status(500).json({success:false , message:"Something Went Wrong"})
    }
}

export const createnewItem = async (req, res) => {  // This controller is working perfect ............... DONE 
    try {
        const createProduct = new Menu(req.body);
        const savedProduct = await createProduct.save();
        res.status(200).json({ success: true, data: savedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const updateItem= async (req,res) => {       // This controller is working perfect ............... DONE 
    try{
        const updateproducts = await Menu.findByIdAndUpdate(req.params.id , req.body , {new :true})
        if(!updateproducts){
            res.status(404).json({success:false , messsage:"Product not Found"})

        }
        res.status(200).json({success:true , data:updateproducts })
    }
    catch{
        res.status(500).json({success:false , messsage:"Something Went Wrong"} )
    }
}

export const deleteItem = async (req,res) => {      // This controller is working perfect ............... DONE 
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



// Working of save()

// Document object → .save() → validate → convert to BSON → insert in MongoDB → return saved document












// / export const getallItems = async (req,res) => { // This controller is working perfect ............... DONE 
// //     try{
// //         const products = await Menu.find()
// //         res.status(200).json({success:true , data:products})
// //     }
// //     catch(error){
// //         res.status(500).json({success:false,messsage:"Something Went Wrong"})
// //     }
// // }