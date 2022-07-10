import React from "react";
import styled from "styled-components";
import ProjectInfo from "../Main/ProjectInfo";

const ContainerWrap = styled.div`
    width: 80%;
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