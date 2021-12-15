import { Schema } from "mongoose";
import mongoose from "mongoose";

const UserSchema = new Schema ({
    id: {type: mongoose.Schema.Types.ObjectId, required: false},
    name: String,
    gender: String,
    address: String,
    profileImage: String,
    favorite: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "favorite"
    },
});

const User = mongoose.model("user", UserSchema);
export default User;