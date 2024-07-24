import { myAxios, privateAxios } from "../helper";

export const loginUser = (loginDetail) => {
  return myAxios
    .post("authentication", loginDetail)
    .then((response) => response.data);
};

export const signUpUser = (user) => {
  return myAxios.post(`api/register`, user).then((response) => response.data);
};

// current User api/current-user

export const cerrentUser = () => {
  return privateAxios.get(`api/current-user`).then((response) => response.data);
};
