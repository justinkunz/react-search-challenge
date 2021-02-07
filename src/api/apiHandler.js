import axios from 'axios';

const apiHandler = async (method, url, params = {}, headers = {}, data = {}) => {
  const { data: response } = await axios({ method, url, params, headers, data });
  return response;
};

export default {
  get: (url, params = {}, headers = {}) => apiHandler('GET', url, params, headers, {}),
  post: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('POST', url, params, headers, data),
  put: (url, params = {}, headers = {}, data = {}) => apiHandler('PUT', url, params, headers, data),
  delete: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('DELETE', url, params, headers, data),
};
