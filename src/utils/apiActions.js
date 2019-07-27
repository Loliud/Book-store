import *as DEFAULT_URLS from '../constants/UrlApis';
import axios from 'axios';
const getApiRequest = (method, url, body) => {

       return  axios({
            method: method,
            url: DEFAULT_URLS.URL_API + url,
            data: body
        });
    
}

export default getApiRequest;