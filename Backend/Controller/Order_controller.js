
//--------------------------------------------------------Controller (API) for Order------------------------------------------------

import { Order } from '../Models/Order_Model.js'


//--------------------------------------Add Order-----------------------------------------------------------------------

export const AddOrder = async (req, res ,next) => {
    try {
        const { customerName, phoneNumber, item, totalPrice , delivery_address } = req.body
        if(!customerName || !phoneNumber || !item || !delivery_address || !totalPrice ){
            const error = new Error("Please Provide All Data")
            error.status=400
            //If I dont use return it runs the furthur code and give problem "Cannot set headers after they are sent"
            return next(error)
        }

        const order_create = await Order.create({ customerName,phoneNumber, item, totalPrice, delivery_address })
        if (!order_create) {

            const error =new Error("Details are not completed")
            error.status=500
            return next(error)
        }
        res.status(200).json({ success: true, data: order_create })
    }
    catch (err) {
        return next(err)
    }
}



//--------------------------------------Show all Orders-----------------------------------------------------------------------

export const getorder = async (req, res) => {
    try {
        const order = await Order.find().populate("item.menuitem", "name price") //Here .populate() is used to get the data also withh the id as you
        if (!order || order  == 0) {                                                                               // can see i add name and price if i dont specify then i get all data
            res.status(404).json({ success: false, message: "No Orders Found" })
        }
        res.status(200).json({ success: true, data: order })

    }
    catch (error) {
        res.status(500).json({ success: true, message: "Something Went Wrong" })
    }
}


//--------------------------------------Show Order by Id-----------------------------------------------------------------------

export const getorderbyID = async (req, res) => {
    try {
        const orderbyID = await Order.findById(req.params.id).populate("item.menuitem")
        if (!orderbyID) {
            return res.status(404).json({ success: false, message: "We Cannot Find The Data" })
        }
        res.status(200).json({ success: true, data: orderbyID , message:"Successfully found The Data"  })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Something Went Wrong"  })
    }
}


//--------------------------------------Update the order by Id-----------------------------------------------------------------------

export const updateorder = async (req, res) => {
    try {
        const putorder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!putorder) {
            return res.status(404).json({ success: false, message: "Order not Found" })
        }
        res.status(200).json({ success: true, data: putorder , message:"Data updated successfully" })
    }
    catch(error){
        res.status(500).json({success:false , message:"Something Went Wrong"})
    }
}


//--------------------------------------Delete The Specific Order-----------------------------------------------------------------------


export const delete_Order = async (req,res) => {
    try{
        const deleteorder=await Order.findByIdAndDelete(req.params.id)
        if(!deleteorder){
            return res.status(404).json({success:false, message:"Order not Found" })
        }
        res.status(200).json({success:true , message:"Order has been successfully deleted"})
    }
    catch(error){
        res.status(500).json({success:false , message:"Something Went Wrong"})
    }
}






// SET TIME OUT





// // console.log("Start");

// setTimeout(() => {
//     console.log("This message shows after 2 seconds");
// }, 2000); // 2000 milliseconds = 2 seconds

// console.log("End");