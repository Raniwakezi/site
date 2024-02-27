import { StyledLine } from "@/public/images/svg/separator";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Left = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
`;

const Right = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 14px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;   
`;

const ContentLeft = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

const ContentRight = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
`;

const TitleRight = styled.p`
  padding: 6px 4px;
  margin: 0;
  width: max-content;

  border: 1px solid #ffffff;
  border-right: none;
  border-radius: 2px;

  color: white;
  font-size: 14px;
`;

const TitleLeft = styled.p`
  padding: 6px 4px;
  margin: 0;
  width: max-content;

  border: 1px solid #ffffff;
  border-left: none;
  border-radius: 2px;

  color: white;
  font-size: 14px;
`;

const TextLeft = styled.p`
  padding: 6px 8px;
  margin-left: 10px;
  width: max-content;

  border: 1px solid #ffffff;
  border-top: none;
  border-bottom: none;

  border-radius: 2px;

  color: white;
  font-size: 14px;
`;

const TextRight = styled.p`
  padding: 6px 8px;
  margin-right: 10px;
  width: max-content;

  border: 1px solid #ffffff;
  border-top: none;
  border-bottom: none;

  border-radius: 2px;

  color: white;
  font-size: 14px;
`;

const Text = styled.p`
  padding: 6px 8px;
  margin-left: 10px;
  width: max-content;

  color: white;
  font-size: 14px;
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlackSide = () => {
  return (
    <Wrapper>
      <Left>
        <TitleLeft>Удаленная поддержка</TitleLeft>
        <TextLeft>
          Услуга по решению проблем с компьютерами <br />и программным
          обеспечением через <br /> интернет.
        </TextLeft>
      </Left>

      <Right>
        <TitleRight>Разработка ПО</TitleRight>
        <TextRight>
          Создание программных продуктов, <br /> включая планирование,
          кодирование,
          <br />
          тестирование и внедрение.
        </TextRight>

        <Center>
          <ContentLeft>
            <TitleLeft>Качественный сервис</TitleLeft>
            <Text>
              Создание программных продуктов, <br /> включая планирование,
              кодирование,
              <br />
              тестирование и внедрение.
            </Text>
          </ContentLeft>

          <LineWrapper>
            <StyledLine />
          </LineWrapper>

          <ContentRight>
            <TitleRight>Хостинг</TitleRight>
            <Text>
              Создание программных продуктов, <br /> включая планирование,
              кодирование,
              <br />
              тестирование и внедрение.
            </Text>
          </ContentRight>
        </Center>
      </Right>
    </Wrapper>
  );
};
