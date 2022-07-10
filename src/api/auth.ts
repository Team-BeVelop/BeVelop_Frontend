import axios from "axios";

export const Login = (email:string,password :string) =>
axios.post(``,{
        email : email,
        password : password, 
});