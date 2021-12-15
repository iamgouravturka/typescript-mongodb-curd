import { Schema } from "mongoose";
import mongoose from 'mongoose';


const FavoriteSchema = new Schema ({
    id: {type: mongoose.Schema.Types.ObjectId, required: false},
    name: [{
        type: String
    }],
})

const Favorite = mongoose.model("favorite", FavoriteSchema);
export default Favorite;