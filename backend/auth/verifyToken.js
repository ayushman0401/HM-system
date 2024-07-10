import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    // Getting token from headers
    const authToken = req.headers.authorization;

    // Checking token exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }

    try {
        const token = authToken.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log('Decoded token:', decoded); 

        // Ensure the decoded token has the expected properties
        if (!decoded.id || !decoded.role) {
            return res.status(401).json({ success: false, message: 'Invalid token structure' });
        }

        req.userId = decoded.id; 
        req.role = decoded.role;
        next();
    } catch (e) {
        if (e.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'token is expired' });
        }
        return res.status(401).json({ success: false, message: 'invalid token' });
    }
};

export const restrict = (roles) => async (req, res, next) => {
    const userId = req.userId;
    let user;

    try {
        console.log('User ID:', userId); 
        const patient = await User.findById(userId);
        const doctor = await Doctor.findById(userId);

        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        } else {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        if (!roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: "You're not authorized" });
        }
        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};
