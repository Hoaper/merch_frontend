import mongoose from 'mongoose';

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aitu_merch';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB, URI:', mongoURI);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
