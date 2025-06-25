export interface Products{
    _id:string;
    brand:string;
    category:string;
    description:string;
    features:string[];
    imageUrl:string;
    inStock:boolean;
    name:string;
    price:number;
    rating:number;
    specifications:{
        color: string;
        dimensions: string;
        warranty: string;
        weight: string;
    }

}