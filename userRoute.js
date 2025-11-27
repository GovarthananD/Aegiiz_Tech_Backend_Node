import express from 'express';
import User from './userModule.js';

const router = express.Router();

router.post('/createUser', async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({message:'User Created Successfully!', user})
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
});

router.get('/getAllUsers', async (req, res) => {
    try{
        const allUsers = await User.find();
        res.status(200).json({message:'Users List', allUsers});
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
});

router.get('/getUser/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:'User not found'});
        res.status(200).json({message:'', user});
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
});

router.put('/user/:id', async (req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!updateUser) return res.status(404).json({message:'User not found'});
        res.status(200).json({message:'User Updated!'})
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try{
        const removeUser = await User.findByIdAndDelete(req.params.id);
        if(!removeUser) return res.status(404).json({message:'User not found'});
        res.status(200).json({message:'User Deleted!'})
    }catch(error){
        res.status(500).json({message:'Server Error'});
    }
});


export default  router;