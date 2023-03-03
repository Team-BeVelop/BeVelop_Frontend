import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../common/Header";
import RecruitContainer from "../components/container/RecruitContainer";
import Login from "../components/Login/Login";

const RecruitPage = () => {
    const { Modal } = useSelector((state: any) => ({
        Modal: state.modal.Modal
    }));

    return (
        <>
            <Helmet>
                <title>BeVelop || 팀원구인</title>
                <meta
                    property="og:url"
                    content="https://team-bevelop.github.io/BeVelop_Frontend/recruit"
                />
                <meta property="og:title" content="BeVelop" />
            </Helmet>
            <Header bgStyle="none" />
            {Modal ? (
                <Wrap>
                    <div className="bg"></div>
                    <Login />
                </Wrap>
            ) : (
                ""
            )}
            <RecruitContainer />
        </>
    );
};

const Wrap = styled.div`
    .bg {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }
`;

export default RecruitPage;
