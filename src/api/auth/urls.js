import { baseUrl } from "../handleApi";

export const urls = {
    signup: `${baseUrl}/users/signup`,
    login: `${baseUrl}/users/login`,
    users: `${baseUrl}/user`,
    update_user: `${baseUrl}/update-user`,
    delete: `${baseUrl}/delete-user`,
};

export default urls;