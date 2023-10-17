import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const {method, url} = response.config;
  const {status} = response;
  return response.data;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const {message} = error;
    const {method, url} = error.config as AxiosRequestConfig;
    const {statusText, status} = (error.response as AxiosResponse) ?? {};

    switch (status) {
      case 401: {
        ApiRequest.defaults.headers.common.Authorization = '';
        //GOTO Login Screen
        console.log('401 || UNAUTHORIZED ACCESS');
        break;
      }
      case 403: {
        console.log('403 || ERROR');
        break;
      }
      case 404: {
        console.log('404 || API NOT FOUND');
        break;
      }
      case 500: {
        console.log('500 || SERVER ERROR');
        break;
      }
      default: {
        console.log('DEFAULT ERROR', status);
        break;
      }
    }
  }
  return Promise.reject(error);
};

const ApiRequest = axios.create({});
ApiRequest.interceptors.response.use(onResponse, onErrorResponse);

export default ApiRequest;
