import axios from 'axios'
import QS from 'qs'

axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
})
const get = (url, ...params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
const post = (url, ...params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(...params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export default {
    get, post
}

/*const instance = axios.create()
instance.interceptors.response.use()

export default instance*/
