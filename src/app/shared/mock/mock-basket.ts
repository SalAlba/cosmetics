import { PRODUCTS } from "./mock-product";
import { BasketComponent } from 'src/app/modules/basket/components/basket/basket.component';

export const BASKET = [
    PRODUCTS[0],
    PRODUCTS[1]
];

function getBasket() {
    let bask = {};
    bask[PRODUCTS[0]._id] = PRODUCTS[0];
    bask[PRODUCTS[1]._id] = PRODUCTS[1];

    return bask;
}

export const BASKET_ = getBasket();