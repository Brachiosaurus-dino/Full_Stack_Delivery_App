// APi for validations

export const Validation_Of_Orders = async (req , res , next) => {
    const {customerName , phoneNumber , item , totalPrice , delivery_address } = req.body

    if(!customerName || !phoneNumber || !item || !totalPrice || ! delivery_address ){
        const error = new Error("All Fields Are Not Completed : ")
        error.status=404
        error.code = "ORDER_VALIDATION_FAILED";
        return next(error)
    }

    if(item.length === 0 ){
        const error =  new Error("The Order Must Have At Least One Item : ")
        error.status= 404
        error.code = "ORDER_VALIDATION_FAILED";
        return next(error)
    }

    if(item.quantity < 1){
        const error =  new Error("The item have atleast 1 quatity : ")
        error.status=404
        error.code = "ORDER_VALIDATION_FAILED";
        return next(error)
    }
    if(typeof totalPrice!=='number' && totalPrice < 0){
        const error = new Error("The Price Should be in number : ")
        error.status(404)
        error.code="ORDER_VALIDATION_FAILED"
        return(error)
    }
    if(!/^[0-9]{10}$/.test(phoneNumber)){
        const error= new Error("The Phone number is not valid : ")
        error.status(404)
        error.code="ORDER_VALIDATION_FAILED"
        return(error)
    }

    console.log("Validation Passed Successfully....")
    next()

}


// We Cannot send two response for one request