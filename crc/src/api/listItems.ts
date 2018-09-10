import axios from 'axios';
const apiBaseUrl = 'https://go.wrench.ai/';
const header =  {
  'Content-Type': 'application/json'
};
const defaultInfo = {"first_name": "Dave", "last_name": "Smith", "company_name": "Wrench.AI Test ss 1", "phone_number": "888-555-1212", "email": "kevin@wrench.ai", "street_1": "555 Main St.", "street_2": "Apt 2B", "city": "Los Angeles", "state": "CA", "zip": "91203", "year": "1970", "month": "01", "day": "21"}

export function submitContactInfo (contactInfo) {
  axios.post(`${apiBaseUrl}contact_info`, defaultInfo, { headers: header })
  
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e.message);
    })
  
}



















const data = require('./mock-data-list');

export function getAllList (cb) {
  cb(data);
}
