import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connecting to MongoDb",error.message);
        process.exit(1);
    }
};
export default connectDB;