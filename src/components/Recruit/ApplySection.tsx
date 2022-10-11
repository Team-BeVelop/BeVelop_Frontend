import styled from "styled-components";
import ApplyFilter from "./ApplyFilter";
import ApplyTemplate from "./ApplyTemplate";
import Dummy from "../../Data/ApplyDummy";

export type ApplySectionType = {
  division: any;
  setDivision: any;
  job: any;
  setJob: any;
  interest: any;
  setInterest: any;
};

const ApplySection: React.FC<ApplySectionType> = ({
  division,
  setDivision,
  job,
  setJob,
  interest,
  setInterest,
}) => {
  const dummy = Dummy;
  return (
    <>
      <ApplyFilter
        division={division}
        setDivision={setDivision}
        job={job}
        setJob={setJob}
        interest={interest}
        setInterest={setInterest}
      />
      <Wrap>
        {dummy.map((item, index) => (
          <ApplyTemplate
            key={index}
            tag={item.tag}
            title={item.title}
            hashtag={item.hashtag}
            content={item.content}
          />
        ))}
      </Wrap>
    </>
  );
};

const Wrap = styled.section`
  overflow: hidden;
  @media screen and (max-width: 480px) {
    margin: 0 20px;
  }
`;

export default ApplySection;
