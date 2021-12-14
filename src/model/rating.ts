import { Schema } from "mongoose";
import mongoose from "mongoose";

const RatingSchema = new Schema ({
    id: {type: mongoose.Schema.Types.ObjectId, required: false},
    review: String,
    star: Number
});


const Rating = mongoose.model("rating", RatingSchema);
export default Rating;