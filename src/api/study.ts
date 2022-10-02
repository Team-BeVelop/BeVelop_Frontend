import axios from "axios";
const BASE_URL = "http://52.78.142.128:8080";

export const getAllStudy = () => axios.get(`${BASE_URL}/studies`);

export const getStudyDetail = (token: string) =>
  axios.get(`${BASE_URL}/studies/1`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const postNewStudy = (token: string) =>
  axios.post(
    `${BASE_URL}/studies`,
    {
      description:
        "스트릿 패션을 올리고 판매할 수 있는 패션 스타트업 플랫폼입니다.",
      division: "SIDE_PROJECT",
      emailUrl: "test123@gmail.com",
      endDate: "2022-09-30",
      enrollmentEndDate: "2022-09-22",
      kakaoUrl: "test123@kakaoUrl",
      maxMemberCount: 0,
      recruitJobList: ["frontend"],
      relatedFieldList: ["frontend"],
      shortTitle: "현재 사이드 프로젝트 진행중에 있습니다.",
      startDate: "2022-09-20",
      title: "사용자 개선 프로젝트 함께 할 분",
    },
    {
      headers: {
        Authorization: `Bearer ${token}}`,
      },
    }
  );
