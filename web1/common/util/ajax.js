import ajax from 'uni-ajax';

const _ajax = ajax.create({
	baseURL: 'http://localhost:3000/admin/api'
});
	
_ajax.interceptors.request.use(config => {
	// console.log(typeof _ajax);
	return config;
}, error => {
	return Promise.reject(error);
})

_ajax.interceptors.response.use(response => {
	return response;
}, error => {
	return Promise.reject(error);
})

export default _ajax;
