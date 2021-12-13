import express from "express";
import { User as UserStructure } from '../interface/userInf'
import User from "../model/user";

// get
export const getUserList = async (req:any, res:any) => {
    const data:any = await User.find();
    res.send(data);
}

// get by ID
export const getUser = async (req:any, res:any) => {
    const user: UserStructure = req.params;

    const data:any = await User.findById({_id: user.id});
    res.send(data);
}

// post
export const createUser = async (req:any, res:any) => {
    const request: UserStructure = req.body;
    console.log(JSON.stringify(request))
    let user = new User(request);
    user.save((err:any, result:any) => {
        if (err) {
            res.send("Error!");
        }else {
            console.log(JSON.stringify(result));
                res.send(result); 
        }
    });
};

// put
export const updateUser = async (req:any, res:any) => {
    const user: UserStructure = req.params;
    const userBody: UserStructure = req.body;

    const data:any = await User.findByIdAndUpdate({_id: user.id});
    if (userBody.name) data.name = userBody.name;
    if (userBody.gender) data.gender = userBody.gender;
    if (userBody.address) data.address = userBody.address;
    if (userBody.profileImage) data.profileImage = userBody.profileImage;

    const result = await data.save();
    res.send(result);
};

// Delete 
export const deleteUser = async (req:any, res:any) => {
    const user: UserStructure = req.params;

    const result: any = await User.findByIdAndDelete({_id: user.id})
    res.send(result);
}