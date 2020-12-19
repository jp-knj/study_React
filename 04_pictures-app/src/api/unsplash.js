import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Fi9_st6VmbMSu3NruyH97uoYOI7Iz1GN33xOvaOKKDc'
  }
});
