import { PRODUCTS } from "./mock-product";
import { User } from "../models/user.model";
import { BasketComponent } from 'src/app/modules/basket/components/basket/basket.component';

export const BASKET = [
    PRODUCTS[0],
    PRODUCTS[1]
];

function getProducts() {
    let bask = {};
    // bask[PRODUCTS[0]._id] = PRODUCTS[0];
    // bask[PRODUCTS[1]._id] = PRODUCTS[1];

    return bask;
}

export const BASKET_ = {
    products: getProducts(),
    buyer: {}
}