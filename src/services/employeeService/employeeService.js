import { privateAxios } from "../helper";

export const addEmployee = (employee, adminId) => {
  return privateAxios
    .post(`admin/employees/${adminId}`, employee)
    .then((response) => {
      return response.data;
    });
};
export const findEmployee = (adminId) => {
  return privateAxios.get(`admin/employees/${adminId}`).then((response) => {
    return response.data;
  });
};
