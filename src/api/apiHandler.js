import axios from 'axios';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const apiHandler = async (method, url, params = {}, headers = {}, data = {}) => {
  try {
    const { data: response, status } = await axios({ method, url, params, headers, data });
    console.log(status);
    await sleep(2000);
    return { successful: true, response };
  } catch (err) {
    console.error(err);
    return { successful: false, response: {} };
  }
};

export default {
  get: (url, params = {}, headers = {}) => apiHandler('GET', url, params, headers, {}),
  post: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('POST', url, params, headers, data),
  put: (url, params = {}, headers = {}, data = {}) => apiHandler('PUT', url, params, headers, data),
  delete: (url, params = {}, headers = {}, data = {}) =>
    apiHandler('DELETE', url, params, headers, data),
};
