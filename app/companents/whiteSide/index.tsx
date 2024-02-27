import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 10px;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;

  background-position: center;
  background-size: cover;
`;

const Image = styled.img`
  width: 612.6px;
  height: 198px;

  background-position: center;
  background-size: cover;
`

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 14px;
  text-align: center;
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const CenterBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 10px;
`;


export const WhiteSide = () => {
  return (
    <Wrapper>
      <StyledWrapper>
        <Block>
          <StyledImage src="images/jpg/image6.jpg" alt="image6" />
          <Text>
            Мы - команда профессионалов,
            <br /> готовых решить любую
            <br /> компьютерную задачу!
          </Text>
        </Block>

        <Block>
          <StyledImage src="images/jpg/image7.jpg" alt="" />
          <Text>
            Мы - команда профессионалов,
            <br /> готовых решить любую
            <br /> компьютерную задачу!
          </Text>
        </Block>
      </StyledWrapper>
      <CenterBlock>
        <StyledImage src="images/jpg/image7.jpg" alt="" />
        <Text>
          Мы - команда профессионалов,
          <br /> готовых решить любую
          <br /> компьютерную задачу!
        </Text>
        <Image src="images/jpg/image3.jpg" alt="" />
      </CenterBlock>
    </Wrapper>
  );
};
