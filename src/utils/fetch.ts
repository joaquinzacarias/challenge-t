import axios from 'axios'
/**
 * Function that returns the access to methods
 * @returns
 */
const fetchClient = () => {
  return {
    post: async (url: string, data: any, options = {}) => await axios.post(url, data, { ...options }),
    put: async (url: string, data: any, options = {}) => await axios.put(url, data, { ...options }),
    get: async (url: string, options = {}) => await axios.get(url, { ...options }),
    delete: async (url: string, options = {}) => await axios.delete(url, { ...options })
  }
}

export default fetchClient()
