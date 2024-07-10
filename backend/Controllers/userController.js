import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const updatedUser=await User.findByIdAndUpdate(id,{$set:req.body},{new:true})

        res.status(200).json({success:true,message:'SuccessFully Updated',data:updatedUser});


    }
    catch(e){
        res.status(500).json({success:false,message:'Failed to Update' });

    }
};


export const deleteUser=async(req,res)=>{
    const id=req.params.id;
    try{
        await User.findByIdAndDelete(id)

        res.status(200).json({success:true,message:'SuccessFully deleted'});


    }
    catch(e){
        res.status(500).json({success:false,message:'Failed to delete' });

    }
};


export const getSingleUser=async(req,res)=>{
    const id=req.params.id;
    try{
        const user=await User.findById(id).select("-password")

        res.status(200).json({success:true,message:'User found',data:user});


    }
    catch(e){
        res.status(404).json({success:false,message:'No user found' });

    }
};

export const getAllUser=async(req,res)=>{
   
    try{
        const user=await User.find({}).select("-password");

        res.status(200).json({success:true,message:'list of users',data:user});


    }
    catch(e){
        res.status(500).json({success:false,message:'Not found' });

    }
};

export const getUserProfile=async(req,res)=>{
    const userId=req.userId;
    try{
        const user=await User.findById(userId);
        if(!user){
            return res.status(404).json({success:false,message:'user not found'});

        }
        const {password,...rest}=user._doc;

        res.status(200).json({success:true,message:'profile info is getting',data:{...rest}});
    }
    catch(e){
        res.status(500).json({success:false,message:'Something went wrong, cannot get'})
    }
};

export const getMyAppointments=async(req,res)=>{
    try{

        //retrieve appointment from booking for specific user
        const bookings= await Booking.find({user:req.userId})
        //extract doctor ids from appointment
        const doctorIds=bookings.map(el=>el.doctor.id)

        //retrieve doctors using doctor ids
        const doctors=await Doctor.find({_id:{$in:doctorIds}}).select('-password')

        res.status(200).json({success:true,message:"Appointment are geeting ",data:doctors})

    }
    catch(e){
        res.status(500).json({success:false,message:'Something went wrong, cannot get'})
    }
}