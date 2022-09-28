import React from "react";
import styled from "styled-components";
import Header from "../../common/Header";
import ProjectInfo from "../Main/ProjectInfo";

const ContainerWrap = styled.main`
    width: 80%;
    max-width: 1400px;
    height: 100vh;
    margin: 0 auto;
`

const MainContainer = () => {
    return(
        
        <ContainerWrap>
        <ProjectInfo/>
        </ContainerWrap>
    )
}

export default MainContainer;