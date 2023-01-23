const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId: { type: String, required: true },
    userPseudo: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    timestamps: { type : Date, default: Date.now },
    imageUrl: { type: String},
    likes: { type: Number, default: 0 },
    usersLiked: { type: [String] },
});

module.exports = mongoose.model('post', postSchema);