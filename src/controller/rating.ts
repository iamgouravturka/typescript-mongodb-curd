import express from 'express';
import { Rating as RatingStructure} from '../interface/ratingInf';
import Rating from '../model/rating';

//get
export const getRatingList = async (req:any, res:any) => {
    const data:any = await Rating.find();
    res.send(data);
}

// get by id
export const getRating = async (req:any, res:any) => {
    const rating: RatingStructure = req.params;

    const data:any = await Rating.findById({_id: rating.id});
    res.send(data);
}

// post
export const createRating = async (req:any, res:any) => {
    const request: RatingStructure = req.body;
    console.log(JSON.stringify(request));
    let rating = new Rating(request);
    rating.save((err:any, result:any) => {
        if (err) {
            res.send(Error!);
        }else {
            console.log(JSON.stringify(result));
            res.send(result);            
        }
    });    
};

// Put
export const updateRating = async (req:any, res:any) => {
    const rating: RatingStructure = req.params;
    const ratingBody: RatingStructure = req.body;

    const data:any = await Rating.findByIdAndUpdate({_id: rating.id});
    if (ratingBody.review) data.review = ratingBody.review;
    if (ratingBody.star) data.star = ratingBody.star;

    const result = await data.save();
    res.send(result)
};

//Delete
export const deleteRating = async (req:any, res:any) => {
    const rating: RatingStructure = req.params;

    const result:any = await Rating.findByIdAndDelete({_id: rating.id});
    res.send(result)
}