import axios from "axios";

const BASE_URL = "http://52.78.142.128:8080";

export const UserInfo = (
    nickName: string,
    portFolio: string,
    link: string,
    email: string,
    kakao: string
) =>
    axios.post(``, {
        nickName: nickName,
        portFolio: portFolio,
        link: link,
        email: email,
        kakao: kakao
    });

export const UserEdit = (
    interests: string,
    introduce: string,
    job: string,
    nickName: string,
    stackName: string[],
    url: string,
    id: number,
    accessToken: string
) =>
    axios.put(
        `${BASE_URL}/user/edit/${id}`,
        {
            interests: interests,
            introduce: introduce,
            job: job,
            nickName: nickName,
            stackName: stackName,
            url: url
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );

// 모든 유저 리스트
export const UserList = () => axios.get(`${BASE_URL}/user/userList`);
