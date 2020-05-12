import { Product } from "./product.model";

export class Payment {
    notifyUrl: string;
    description: string;
    products: Array<Product>;
}