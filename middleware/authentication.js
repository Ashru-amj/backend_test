import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

const isAuthenticated = async (req,res,next)=>{
    const token = req.cookies.token;
   try{
    if(!token){
        return res.status(401).json({msg:"Access denied. No token provided."});
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
   } catch{
    return res.status(401).json({msg:"Token is invalid!"});
   }
}
export default isAuthenticated;




