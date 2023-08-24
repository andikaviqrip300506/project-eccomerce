import axios from "axios";

const product = {
    namespaced: true,
    state: {
        productData: [],
        getProductId: []
    },
    getters: {
        getProduct: (state) => state.productData
        
    },
    actions: {
        async fetchProduct({ commit }) {
            try {
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/product/latest/10"
                );
                commit("SET_PRODUCT", data.data);
            } catch (error) {
                alert (error);
                console.log(error);
            }
        },

        async fetchSingleProduct({ commit }, slug) {
            try {
                const response = await axios.get(
                    `https://ecommerce.olipiskandar.com/api/v1/product/details/${slug}`
                );
                commit ("SET_SINGLE_PRODUCT", response.data['data']);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    
    },
    mutations: {
        SET_PRODUCT(state, product) {
            state.productData = product
        },
        SET_SINGLE_PRODUCT(state, product) {
            state.getProductId = product
        },
    }
}

export default product;