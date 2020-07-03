import { Product } from "./product.model";
import { User } from "./user.model";

export class CartProduct extends Product{
    // _id?: string;
    // price?: number;
    // quantity?: number;
}

export interface Cart {
    product: Map<string, CartProduct>;
    // product: Record<string, Product>;
    buyer: User;
}