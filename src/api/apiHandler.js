import axios from 'axios';

/**
 * Handler for making API calls
 *
 * @param {String} method Request Method
 * @param {String} url API URL
 * @param {Object} params Request params
 * @param {Object} headers Request headers
 * @param {Object} data Request body
 *
 * @returns {Any} Response data
 */
const apiHandler = async (method, url, params = {}, headers = {}, data = {}) => {
  const { data: response } = await axios({ method, url, params, headers, data });
  return response;
};

const api = {
  get: (url, params = {}, headers = {}) => apiHandler('GET', url, params, headers, {}),
  post: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('POST', url, params, headers, data),
  put: (url, params = {}, headers = {}, data = {}) => apiHandler('PUT', url, params, headers, data),
  delete: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('DELETE', url, params, headers, data),
};

export default api;
