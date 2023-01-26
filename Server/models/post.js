const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userPseudo: { type: String },
    title: { type: String, required: true },
    description: { type: String, required: true },
    timestamps: { type : Date, default: Date.now },
    imageUrl: { type: String},
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
});

module.exports = mongoose.model('post', postSchema);