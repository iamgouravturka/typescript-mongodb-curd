import express from "express";
import { createUser, deleteUser, getUser, getUserList, updateUser } from "../controller/user";

const userRoute = express.Router();

userRoute.put('/:id', updateUser).post('/', createUser).get('/', getUserList).get('/:id', getUser).delete('/:id', deleteUser);

export default userRoute;