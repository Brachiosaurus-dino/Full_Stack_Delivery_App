// --------------------------------------------------------------------Controller (API) for Menu -----------------------------------------------------------
import Restaurant from "../Models/Menu_Item_Model.js"

//--------------------------------------Show a single Item -----------------------------------------------------------------------

export const getItembyId = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ success: false, message: "Restaurant not found" });
        }

        // Return only the menu array
        res.status(200).json({ success: true, data: restaurant.menu });
    } catch (error) {
        console.error("Error fetching restaurant:", error); // <--- log the real error
        res.status(500).json({ success: false, message: "Something went wrong" });
    }
}

//--------------------------------------Show all Items-----------------------------------------------------------------------

export const getItems = async (req, res) => {     // This controller is working perfect ............... DONE 
    try {
        const getProducts = await Restaurant.find()
        if (!getProducts) {
            res.status(404).json({ success: false, message: "Product not Found" })
        }
        res.status(200).json({ success: true, data: getProducts })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Something Went Wrong" })
    }
}


//--------------------------------------Cretae a new item in menu-----------------------------------------------------------------------


export const createnewItem = async (req, res) => {  // This controller is working perfect ............... DONE 
    try {
        const createProduct = new Restaurant(req.body);
        const savedProduct = await createProduct.save();
        res.status(200).json({ success: true, data: savedProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//--------------------------------------Update Specific Item In Menu ----------------------------------------------------------------------- 


export const updateItem = async (req, res) => {       // This controller is working perfect ............... DONE 
    try {
        const updateproducts = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updateproducts) {
            res.status(404).json({ success: false, messsage: "Product not Found" })

        }
        res.status(200).json({ success: true, data: updateproducts })
    }
    catch {
        res.status(500).json({ success: false, messsage: "Something Went Wrong" })
    }
}

//--------------------------------------Delete Specific Item in Menu-----------------------------------------------------------------------

export const deleteItem = async (req, res) => {      // This controller is working perfect ............... DONE 
    try {
        const deleteProduct = await Restaurant.findByIdAndDelete(req.params.id)
        if (!deleteProduct) {
            res.status(404).json({ success: false, messsage: "Product not Found" })
        }
        res.status(200).json({ success: true, data: "Product Deleted sucessfully" })
    }
    catch {
        res.status(500).json({ success: false, messsage: "Something Went Wrong" })
    }
}


//  ON HOLD 

// export const filter = async (req,res) => {
//     try{
//         const filterby = await Order.find({price :{$le :100}})
//     }
// }


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





// Controller basically server ka “middleman” hota hai jo client request aur database ke beech ka kaam handle karta hai.
// Request process karna
// Model ke saath baat karna
// Response send karna