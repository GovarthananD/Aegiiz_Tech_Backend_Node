import jwt from 'jsonwebtoken';

export const authorization = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "No token provided" });

        const decoded = jwt.verify({ id: user._id }, process.env.SECRET_KEY);
        next();
    } catch (error) {
        res.status(500).json({message: 'Server Error'});
    }
}