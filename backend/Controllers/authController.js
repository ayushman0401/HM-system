import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken=user=>{
    return jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{
        expiresIn:'15d'
    })
}
export const register = async (req, res) => {
    const { email, name, password, role, gender, photo } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();

        res.status(201).json({ success: true, message: 'User successfully created' });
    } catch (e) {
        res.status(500).json({ success: false, message: 'Server Error, Try Again' });
    }
};

export const login = async (req, res) => {
    const { email} = req.body;

    try {
        let user=null;
        const patient=await User.findOne({email});
        const doctor=await Doctor.findOne({email});

        if(patient){
            user=patient
        }
        if(doctor){
            user=doctor
        }

        if(!user){
            return res.status(400).json({message:"User not found"});
        }

        const ispassmatch=await bcrypt.compare(req.body.password,user.password);

        if(!ispassmatch){
            return res.status(400).json({status:"false",message:"password does not matched"})
        }

        const token=generateToken(user);

        const {password,role,appointments,...rest}=user._doc

            return res.status(200).json({status:"true",message:"successfully login",token,data:{...rest},role})



      } 
      catch (e) {
        res.status(500).json({ success: false, message: 'failed to login' });
    }
};
