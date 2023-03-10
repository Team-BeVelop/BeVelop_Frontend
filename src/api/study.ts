import axios from "axios";
const BASE_URL = "http://52.78.142.128:8080";

// 모든 스터디
export const getStudyList = () => axios.get(`${BASE_URL}/studies`);

// 스터디 디테일
export const getStudyDetail = (token: string | null, id: string) =>
    axios.get(`${BASE_URL}/studies/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });

// 스터디 찾기
export const StudySearch = (division: string, field: string, job: string) =>
    axios.get(
        `${BASE_URL}/studies/search?DIVISION=${division}&FIELD=${field}&JOB=${job}`
    );

// 새로운 스터디 생성
export const addNewStudy = (
    token: string | null,
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
    axios.post(
        `${BASE_URL}/studies`,
        {
            description: description,
            division: division,
            emailUrl: emailUrl,
            endDate: endDate,
            enrollmentEndDate: enrollmentEndDate,
            kakaoUrl: kakaoUrl,
            maxMemberCount: maxMemberCount,
            recruitJobList: recruitJobList,
            relatedFieldList: relatedFieldList,
            shortTitle: shortTitle,
            startDate: startDate,
            title: title
        },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    );
