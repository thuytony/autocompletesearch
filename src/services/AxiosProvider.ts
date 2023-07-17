import axios from 'axios';
import { ApiConfig } from '@constants';

/**
 * Axios defaults
 */
axios.defaults.baseURL = ApiConfig.API_BASE_URL;
axios.defaults.timeout = ApiConfig.API_TIME_OUT;

// Headers
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

/**
 * Request Interceptor
 */
axios.interceptors.request.use(
  async requestConfig => {
    const config = requestConfig
    return config
  },
  error => {
    throw error
  },
)

/**
 * Response Interceptor
 */
axios.interceptors.response.use(
  response => {
    // Example: Status is error code - throw error
    if (response.status === 203) {
      throw response.data
    }

    // Otherwise just return the data
    return response
  },
  error => {
    // Pass the response from the API, rather than a status code
    if (error && error.response && error.response.data) {
      throw error.response.data
    }
    throw error
  },
)

export default axios
