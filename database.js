import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DB = async () => {
   try{
 await mongoose.connect(process.env.MONGO_URL);
    console.log('Database Connected')
   }catch(error){
    console.log('something error while db connecting')
   }
}

export default DB;