import { User } from "../modal/user.js";
import jwt from "jsonwebtoken";


import dotenv from "dotenv"
dotenv.config();

export function getUserMail( request){
    return User.findOne({email:request.body.email,});
}

export function getuserdetails(id){
    return User.findById(id).select('_id firstname lastname email')
}

export function generateToken(id){
    return jwt.sign({id},process.env.SecretKey)
}

