// APi for validations

// export const Validation_Of_Orders = async (req , res , next) => {
//     const {customerName , phoneNumber , item , totalPrice , delivery_address } = req.body

//     if(!customerName || !phoneNumber || !item || !totalPrice || ! delivery_address ){
//         const error = new Error("All Fields Are Not Completed : ")
//         error.status=404
//         error.code = "ORDER_VALIDATION_FAILED";
//         return next(error)
//     }

//     if(item.length === 0 ){
//         const error =  new Error("The Order Must Have At Least One Item : ")
//         error.status= 404
//         error.code = "ORDER_VALIDATION_FAILED";
//         return next(error)
//     }

//     if(item.quantity < 1){
//         const error =  new Error("The item have atleast 1 quatity : ")
//         error.status=404
//         error.code = "ORDER_VALIDATION_FAILED";
//         return next(error)
//     }
//     if(typeof totalPrice!=='number' || totalPrice < 0){
//         const error = new Error("The Price Should be in number : ")
//         error.status=404
//         error.code="ORDER_VALIDATION_FAILED"
//         return(error)
//     }
//     if(!/^[0-9]{10}$/.test(phoneNumber)){
//         const error= new Error("The Phone number is not valid : ")
//         error.status=404
//         error.code="ORDER_VALIDATION_FAILED"
//         return next(error)
//     }

//     console.log("Validation Passed Successfully....")
//     next()

// }


// We Cannot send two response for one request



export const Validate_Menu_Item = (req, res, next) => {
    const { name, price, category, description, image } = req.body;

   
    if (!name || !price || !category || !description || !image) {
        const error = new Error("All menu item fields are required.");
        error.status = 400;
        error.code = "MENU_VALIDATION_FAILED";
        return next(error);
    }

   
    if (typeof price !== "number" || price <= 0) {
        const error = new Error("Price must be a positive number.");
        error.status = 400;
        error.code = "MENU_VALIDATION_FAILED";
        return next(error);
    }

   
    if (typeof category !== "string") {
        const error = new Error("Category must be a string.");
        error.status = 400;
        error.code = "MENU_VALIDATION_FAILED";
        return next(error);
    }

   
    if (name.length < 3) {
        const error = new Error("Item name must be at least 3 characters.");
        error.status = 400;
        error.code = "MENU_VALIDATION_FAILED";
        return next(error);
    }

    console.log("Menu Validation Passed Successfully...");
    next();
};