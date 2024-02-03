import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        required: true,
    },
    colorVariants: {
        type: [
            {
                color: {
                    type: String,
                    required: true,
                },
                imageURL: {
                    type: String,
                    required: true,
                },
            },
        ],
        required: true,
    },
});

export default mongoose.models.Items || mongoose.model('Items', itemSchema);