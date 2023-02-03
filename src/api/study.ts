import axios from "axios";
const BASE_URL = "http://52.78.142.128:8080";

// 모든 스터디
export const getStudyList = () => axios.get(`${BASE_URL}/studies`);

export const getStudyDetail = (token: string, id: string) =>
  axios.get(`${BASE_URL}/studies/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

// 새로운 study 생성
export const addNewStudy = (
  token: string,
  description: string,
  division: string,
  emailUrl: string,
  endDate: string,
  enrollmentEndDate: string,
  kakaoUrl: string,
  maxMemberCount: number,
  recruitJobList: string[],
  relatedFieldList: string[],
  shortTitle: string,
  startDate: string,
  title: string
) =>
  axios.post(`${BASE_URL}/studies`, {
    headers: { Authorization: `Bearer ${token}` },
    data: {
      description: description,
      division: division,
      emailUrl: emailUrl,
      endDate: endDate,
      enrollmentEndDate: enrollmentEndDate,
      kakaoUrl: kakaoUrl,
      maxMemberCount: maxMemberCount,
      recruitJobList: "BACKEND",
      relatedFieldList: "엔터테인먼트",
      shortTitle: shortTitle,
      startDate: startDate,
      title: title,
    },
  });
