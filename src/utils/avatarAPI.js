import axios from "axios";

export default axios.create({
	baseURL: 'https://api.lorem.space/image/face?w=120&h=120',
	responseType: "json",
	//"crossDomain": true,
	headers: {
		"Content-Type": "application/json",
		//mode: 'cors',
		"withCredentials": true,
		//timeout: 10000,
		//"Access-Control-Allow-Origin": "*",
		//"Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
		//crossdomain: true
	},
});