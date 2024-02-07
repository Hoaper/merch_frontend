import mongoose from 'mongoose';

const categories = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        description: 'Product name'
    },
    imageURL: {
        type: String,
        required: true,
        description: 'Image URL for the category'
    },
    displayName: {
        type: String,
        required: true,
        description: 'Display name for the category'
    }
});


export default mongoose.models.Categories || mongoose.model('Categories', categories);