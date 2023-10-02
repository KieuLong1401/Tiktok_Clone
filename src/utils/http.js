import axios from 'axios'

console.log(import.meta.env.development)

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
})

export default request
