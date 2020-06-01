import { Product } from "./product.model";
import { Buyer } from "./buyer.model";

export class Payment {
    notifyUrl: string;
    description: string;
    products: Array<Product>;
    buyer: Buyer;
}