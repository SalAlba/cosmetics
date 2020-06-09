export class Product {
    // basic
    _id?: string;
    title: string;
    link?: string;
    manufacturer?: string;
    deliveryTime?: string;
    availability?: boolean;

    // img
    basicImgUrl?: string;
    imgs?: string[];


    // Brief description
    shortDescription?: string;
    fullDescription?: string;
    tags?: string[];

    // prices
    discount?: number;
    quantity?: number;
    unitPrice?: number;
    // unitPricePLN?: number;
    // unitPriceUSD?: number;
    // unitPriceEURO?: number;
    // unitPriceOMR?: number;
    // unitPriceQAR?: number;

    // others
    visible: boolean;
    bestSeller:boolean;
    created?: string;
    updated?: string;
}