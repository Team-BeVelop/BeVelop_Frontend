import axios from "axios";

const BASE_URL = "http://52.78.142.128:8080";

export const UserInfo = (accessToken: string) =>
    axios.get(`${BASE_URL}/user/profile`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

export const UserEdit = (
    interests: string,
    introduce: string,
    job: string,
    nickname: string,
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
            nickname: nickname,
            stackName: stackName,
            url: url
        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    );
