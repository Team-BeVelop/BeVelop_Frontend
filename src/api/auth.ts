import axios from "axios";

const BASE_URL = "http://52.78.142.128:8080";

export const Login = (email: string, password: string) =>
    axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password
    });

export const SignUp = (email: string, nickname: string, password: string) =>
    axios.post(`${BASE_URL}/auth/signup`, {
        email: email,
        nickname: nickname,
        password: password
    });
