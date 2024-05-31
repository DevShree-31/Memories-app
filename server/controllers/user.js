import User from "../models/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const signin=async(req,res)=>{
    const {email,password}=req.body
    try{
        const existingUser=await User.findOne({email})
        if(!existingUser) return res.status(404).json({message:'User does not Exist'})
        const isCorrectPassword=bcrypt.compare(password,existingUser.password)
        if(!isCorrectPassword) return res.status(404).json({message:'Invalid Password'})
        const token=jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1hr'})
        res.status(200).json({result:existingUser},token)
    }
    catch(error){
        res.status(500).json({message:'Something Went Wrong'})
        console.log(error)
    }
}
export const signup = async (req, res) => {
    const { email, password, confirmPassword,firstName, lastName } = req.body;
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists" });
        if(password!==confirmPassword) return res.status(404).json({message:"Password does not matches"})
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });
        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}