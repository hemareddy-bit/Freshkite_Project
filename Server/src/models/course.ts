import mongoose, { Schema,Document, model } from "mongoose";

interface IVideo{
    title:string;
    language:string;
    VideoLink:string
}

interface ISubTopics{
    title:string;
    videos:IVideo[];
}

interface ITopics{
    title:string;
    subTopics:ISubTopics[];
}

export interface ICourse extends Document{
    title:string;
    description:string;
    imagePath:string;
    topics:ITopics[];
    price:number;

}

const videoSchema:Schema = new Schema<IVideo>({
    title:{type:String,required:true},
    language:{type:String,required:true}
})

const subTopicsSchema:Schema = new Schema<ISubTopics>({
    title:{type:String,required:true},
    videos:{type:[videoSchema],required:true}
})

const topicsSchema:Schema = new Schema<ITopics>({
    title:{type:String,required:true},
    subTopics:{type:[subTopicsSchema],required:true}
})

const courseSchema:Schema = new Schema<ICourse>({
    title:{type:String,required:true},
    description:{type:String,required:true},
    imagePath:{type:String,required:true},
    topics:{type:[topicsSchema],required:true},
    price:{type:Number,required:true}
},{
    timestamps: true, // Add createdAt and updatedAt fields
})

export const Course  =  model<ICourse>("courses",courseSchema)

 