export interface SlideInterface {
    url: string;
    title: string;
}

export interface ProductDetails{
    id:string;
    title: string;
    price: number;
    description : string;
    category: string;
    image: string;
    rating: Rating[];
}

export interface Rating{
    rate: number;
    count: number;
}

export type Categories = string[];