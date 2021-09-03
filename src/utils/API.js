/* eslint-disable import/no-anonymous-default-export */
console.log("Inside the API folder")
const axios = require("axios");
//import axios from "axios"
const axiosinstance = axios.create({
    baseURL: 'http://localhost:3000'
 });


// Export an object with a "search" method that searches the Giphy API for the passed query
/*export default {
  getUserInfo: function(query) {
    return axios.get(query)
  },
  postUserInfo: function(query,data){
      console.log("This is the data for post user info: ",data)
      return axios.post(query,data)
    
  }
}; */


module.exports = {

    getUserInfo: function(query) {
      return axios.get(query)
    },
    postUserInfo: function(query,data){
        return console.log("This is the data for post user info: ",data)
        //return axiosinstance.post(query,data)
      
    }
  };