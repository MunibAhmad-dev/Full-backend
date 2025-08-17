import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
const connectDB = async () => {
    try {
       const conncetioninstants = await mongoose.connect(`${process.env.Database_URL}`);
        console.log(`\n Mongodb connected !!
             DB HOSt:${conncetioninstants.connection.host}`)
    } catch (error) {
        console.log("MONGODB conncetion error", error);
        process.exit(1)
    }
}
export default connectDB;