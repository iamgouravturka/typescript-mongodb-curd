import express from 'express';
import { Favorite as FavoriteStructure } from '../interface/favoriteInf';
import Favorite from '../model/favorite';

// get
export const getFavoriteList = async (req:any, res:any) => {
    const data:any = await Favorite.find();
    res.send(data);
}

// get by /:id

export const getFavorite = async (req:any, res:any) => {
    const favorite: FavoriteStructure = req.params;

    const data: any = await Favorite.findById({_id: favorite.id});
    res.send(data)
}

// Post
export const createFavorite = async (req:any, res:any) => {
    const request: FavoriteStructure = req.body;
    console.log(JSON.stringify(request))
    let favorite = new Favorite(request);
    favorite.save((err:any, result:any) => {
        if(err) {
            res.send("Error!")
        }else {
            console.log(JSON.stringify(request));
            res.send(result);
        }
    });
}
