const User = require('../model/viewerModel')
const jwt = require('jsonwebtoken')

exports.signup = async (req, res) => {
    try {
        const { Fullname, Email, Password } = req.body;
        let user;
    
        // Check if the user is an admin
        if (req.body.isAdmin) {
          user = new User({
            Fullname,
            Email,
            Password,
            role: 'admin',
          });
        } else {
          user = new User({
            Fullname,
            Email,
            Password,
          });
        }
    
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const user = await User.findOne({ Email, Password });

        if (!user || !Password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check if the user is an admin
        if (user.role === 'admin') {
            // Generate a JWT token with admin privileges
            const token = jwt.sign({ userId: user._id, role: 'admin' }, 'secret000', {
                expiresIn: '1h',
            });
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    Fullname: user.Fullname,
                    Email: user.Email,
                    role: user.role,
                },
                token,
            });
        } else {
            // Generate a JWT token with user privileges
            const token = jwt.sign({ userId: user._id, role: 'user' }, 'secret000', {
                expiresIn: '1h',
            });
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    Fullname: user.Fullname,
                    Email: user.Email,
                    role: user.role,
                },
                token,
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};