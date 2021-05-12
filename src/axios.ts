import axios from "axios";
import { store } from ".";
import { actionCreators } from "./actions/signIn";

const BASE_URL = "https://kolesa-app.herokuapp.com/";

export const Axios = axios.create({
    baseURL: BASE_URL
});

const token = localStorage.getItem('TOKEN')

if(token) {
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

Axios.interceptors.response.use(
    (value) => {
        return value;
    },
    async (error) => {
        if(error.response.status === 401) {
            await store.dispatch(actionCreators.signOut());
            localStorage.removeItem('TOKEN');
            localStorage.removeItem('USERNAME');
            delete Axios.defaults.headers.common['Authorization'];
        }
        return Promise.reject(error);
    }
)

