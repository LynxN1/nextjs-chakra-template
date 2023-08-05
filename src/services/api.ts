import axios from 'axios'

const api = axios.create({
  baseURL: 'https://your-api-url.com',
  // You can set any default headers here, or set them on a per-request basis later
  headers: { 'Content-Type': 'application/json' }
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // For example, you could add an authorization token here
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default api
