import http from "../http-common";

const login = (data) => {
	return http.post("/user", data);
};

const getRegions = () => {
	return http.get("/regions");
};

const getDivisions = (region_id) => {
	return http.get(`/divisions/regions/${region_id}`);
};

const getDistricts = (division_id) => {
	return http.get(`/districts/divisions/${division_id}`);
};

export default {
	login,
	getDivisions,
	getDistricts,
	getRegions,
};
