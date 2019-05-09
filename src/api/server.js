import axios from 'axios'
import { baseUrl } from "@/config/envconfig.js"

const service = axios.create({
  baseURL: baseUrl, // api 的 base_url
  timeout: 5000 // request timeout
})

export default service