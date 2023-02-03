import axios from "axios";
const BASE_URL = "http://52.78.142.128:8080";

// 모든 프로젝트
export const getProjectList = () =>
    axios.get(`${BASE_URL}/project/projectList`);
