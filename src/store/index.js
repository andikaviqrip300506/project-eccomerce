import { createStore } from "vuex";
import auth from "./modules/auth";
import brands from "./modules/brands"
import category from "./modules/category";
import product from "./modules/product";
import profile from "./modules/profile";
import cart from "./modules/cart";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        category,
        product,
        profile,
        cart 
    }
});

export default store;