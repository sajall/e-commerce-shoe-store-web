import { handleAPICall } from "../handleApi";
import urls from "./urls";

export const signupApi = async (data) => {
    const body = data;
    const res = await handleAPICall(`${urls.signup}`, "POST", body);
    return res;
};

export const logInApi = async (data) => {
    const res = await handleAPICall(`${urls.login}`, "PUT", data);
    return res;
};

export const getUsersApi = async () => {
    const response = await handleAPICall(`${urls.users}`, "GET");
    return response;
};

export const updateUserApi = async (id, data) => {
    const body = data;
    const res = await handleAPICall(`${urls.update_user}/${id}`, "PUT", body);
    return res;
};

export const deleteuserApi = async (id) => {
    const res = await handleAPICall(`${urls.delete}/${id}`, "DELETE");
    return res;
};

