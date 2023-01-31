import axios from "axios";

export const UserInfo = (nickName:string,portFolio :string, link : string,email : string, kakao : string) =>
axios.post(``,{
    nickName : nickName,
    portFolio : portFolio,
    link : link,
    email : email,
    kakao : kakao
});