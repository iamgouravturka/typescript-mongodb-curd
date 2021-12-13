import {
    Schema
  } from 'mongoose';
  import mongoose from 'mongoose';



const UserShema = new Schema ({
    name: String,
    email: String,
    blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
});


const BlogSchema = new Schema({
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    body: String,
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Commenti"
    }]
})

const CommentiSchema = new Schema ({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    },
    body: String
})

const Author = mongoose.model("Author", UserShema);
const Blog = mongoose.model("Blog", BlogSchema);
const Commenti = mongoose.model("Comment", CommentiSchema);

export {Author, Blog, Commenti}