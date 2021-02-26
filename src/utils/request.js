import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.tvmaze.com',
})

export default request
