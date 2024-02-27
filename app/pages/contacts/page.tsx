"use client";
import Link from "next/link";
import styled from "styled-components";

import { Header } from "@/app/companents/header/header";

import { StyledVk } from "@/public/images/svg/vk";
import { StyledTelegram } from "@/public/images/svg/telegram";

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Contacts() {
  return (
    <div>
      <Header />
      <div>
        <Title>IT Service "PCExpress"</Title>

        <Text>Мы в социальных сетях</Text>
      </div>
      <Links>
        <Link href={"https://vk.com/secretplaceforyoursoul"}>
          <StyledVk />
        </Link>
        <Link href={"https://t.me/alc_club"}>
          <StyledTelegram />
        </Link>
        <p>Номер телефона 591(793)897-55-27</p>
        <p>
          По адресу 763950, Архангельская область, город Воскресенск, пл.
          Ломоносова, 37
        </p>
      </Links>
    </div>
  );
}
