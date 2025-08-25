import mongoose from "mongoose";
const connectDB = async () => {
    try {
       const conncetioninstants = await mongoose.connect(`${process.env.DATABASE_URL}`);
        console.log(`\n Mongodb connected !!DB HOSt:${conncetioninstants.connection.host}`)
    } catch (error) {
        console.log("MONGODB conncetion error", error);
        process.exit(1)
    }
}




// const connectDB = async () => {
//     try {
        
//         const conncetioninstants = await mongoose.connect(`${process.env.DATABASE_URL}`)
//         console.log("database connected succesfully HOST" , conncetioninstants.connection.host  )
//     } catch (error) {
//         console.log('Error in database connection')
//     }

// }

// mongoose.connection.on('connecting', () => {
//   console.log('Connecting to MongoDB...');
// });

// mongoose.connection.on('disconnected', () => {
//   console.warn('MongoDB disconnected!');
// });

// // Graceful shutdown
// process.on('SIGINT', async () => {
//   await mongoose.connection.close();
//   console.log('MongoDB connection closed due to app termination');
//   process.exit(0);
// });

export default connectDB;