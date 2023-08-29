import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem("token") || "",
    loginError: null,
    userAddress: []

    
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    gettersUserAddress: (state) => state.userAddress
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/auth/login",
          credentials
        );
        const token = response.data.access_token;
        const user = response.data.user;

        // Save token to localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user))

        commit("SET_TOKEN", token);
        console.log("Token saved:", token);

        commit("SET_USER", user);
        console.log(user)

        commit("SET_LOGIN_ERROR", null);

        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login Failed";
        commit("SET_LOGIN_ERROR", errorMessage)
        console.error(error);
        return false;
      }
    },
    async register({ commit }, credentials) {
      try {
        const registerUrl =
          'https://ecommerce.olipiskandar.com/api/v1/auth/signup';
        const responseRegister = await axios.post(registerUrl, credentials);
        const token = responseRegister.data.access_token;

        console.log(credentials);
        console.log(token);
        localStorage.setItem('token', token);
        commit('SET_TOKEN', token);
        return true;
      } catch (error) {
        alert(error);
        console.error(error);
        return false;
      }
    },
    async getUserAddress({ state,commit }) {
      try {
        const urlAddresses =
          'https://ecommerce.olipiskandar.com/api/v1/user/addresses';
        const response = await axios.get(urlAddresses, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        commit('SET_ADDRESS', response.data)
        return response.data;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem("token");
      localStorage.removeItem("token");
      commit("SET_TOKEN", "");
      commit("SET_USER", null)
      // Log token removed
      console.log("Token removed:", token);
      window.location.href = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_LOGIN_ERROR(state, error) {
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.userAddress = address;
    }
  },
};

export default auth;