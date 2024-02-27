import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: left;
  padding: 20px 40px;
  align-items: center;
`;

const NavConteiner = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  align-items: center;
  width: 50%;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavSeparator = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const OrderButton = styled.div`
  background-color: #2b2b2b;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #525151;
  }
`;
const Text = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <img src="images/jpg/pcIcon.jpg" alt="Header Image" />
      <NavConteiner>
        <li>
          <Link href="/">
            <Text>Главная</Text>
          </Link>
        </li>

        <NavSeparator>|</NavSeparator>

        <li>
          <Link href="/pages/about">
            <Text>О нас</Text>
          </Link>
        </li>

        <NavSeparator>|</NavSeparator>

        <li>
          <Link href="/pages/contacts">
            <Text>Контакты</Text>
          </Link>
        </li>

        <NavSeparator>|</NavSeparator>

        <Link href="/pages/order">
          <OrderButton>Сделать заказ</OrderButton>
        </Link>
      </NavConteiner>
    </Wrapper>
  );
};
