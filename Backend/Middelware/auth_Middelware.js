// import jwt from 'jsonwebtoken'

// export const veryfy_user = async (req,res,next)=>{
//     //This line will check the backend pick your token and find the token i the whole cod elike "Beare skwewelwnlkvw23r23r23g43t3  form s-3 is your token this line will 
//     // brreak the token and pick yours if any issue "?." will fix that
//     const token=req.headers.authorization?.split(" ")[1]

//     if(!token) return res.status(401).json({message:"No token provided"})
//     // This line verify your token real , form our swerver , and then save your details and send to the routers by decoded
//     jwt.verify(token,process.env.JWT_SECRET || "secret9029" ,(err,decoded) =>{
//         if(err) return res.status(404).json({message:"Token is not valid"})
//     // We decode so taht chekc the persmissions of user and this decode can furthur use by the routes to show name email and other stuff
//         req.user = decoded
//         next()
//     })

// };



// This will chekc and confirem the user details
// export const verify_admin = (req,res,next) =>{
//     veryfy_user(req,res,() => {
//         if(req.user.role !== 'admin'){
//             return res.status(403).json({ message: "Admin access only" });
//         }

//         next()
//     })
// }


import jwt from "jsonwebtoken";

export const veryfy_user = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret9029");

        req.user = decoded; // Save user info for route
        next();

    } catch (err) {
        return res.status(401).json({ message: "Token is not valid" });
    }
};


export const verify_admin = (req, res, next) => {
    veryfy_user(req, res, () => {
        if (req.user.role !== "admin") {
            return res.status(403).json({ message: "Admin access only" });
        }
        next();
    });
};