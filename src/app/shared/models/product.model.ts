export class Product {
    // tslint:disable-next-line:variable-name
    _id?: string;
    title: string;
    // postType?: string;
    // description?: string;
    // markdownUrl?: string;
    // link?: string;
    tags?: string[];
    visible: boolean;
    created?: string;
    updated?: string;


    // Brief description
    unitPrice?: number;
    quantity?: number;
    discount?: number;
}