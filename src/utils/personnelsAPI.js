import axios from "axios";

export default axios.create({
	baseURL: "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users",
	responseType: "json",
	headers: {
		"Content-Type": "application/json",
		"withCredentials": true,
	},
});