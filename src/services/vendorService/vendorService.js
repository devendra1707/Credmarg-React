import { privateAxios } from "../helper";

export const addVendor = (vendor, adminId) => {
  return privateAxios
    .post(`admin/vendors/${adminId}`, vendor)
    .then((response) => {
      return response.data;
    });
};

export const findVendor = (adminId) => {
  return privateAxios.get(`admin/vendors/${adminId}`).then((response) => {
    return response.data;
  });
};

export const sendEmail = (emailList) => {
  return privateAxios
    .post('admin/notify', emailList, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, 
      },
    })
    .then((response) => {
      return response.data; 
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      throw error; 
    });
};
