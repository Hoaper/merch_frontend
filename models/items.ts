import mongoose from 'mongoose';
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        description: 'Product name'
    },
    description: {
        type: String,
        required: true,
        description: 'Product description'
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        description: 'Product price'
    },
    stockQuantity: {
        type: Number,
        required: true,
        min: 0,
        description: 'Quantity in stock'
    },
    category: {
        type: String,
        required: true,
        description: 'Product category'
    },
    colorVariants: {
        type: [{
            color: {
                type: String,
                enum: ['white', 'black', 'blue'],
                required: true,
                description: 'Color of the variant'
            },
            imageURL: {
                type: String,
                required: true,
                description: 'Image URL for the variant'
            }
        }],
        description: 'Array of color variants'
    }
});


export default mongoose.models.Items || mongoose.model('Items', itemSchema);