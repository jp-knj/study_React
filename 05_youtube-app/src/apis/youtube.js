import axios from 'axios';
const KEY = 'AIzaSyCWS4dsK2LSasr_NzzWDhiu3Bs_4AZE6F0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
