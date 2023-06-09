import Head from "next/head";
import Image from "next/image";

import medicaSvg from "@assets/medica.svg";

import * as S from "@styles/Home";

import {
  LeftWrapperContainer,
  RightWrapperContainer,
  WrapperContainer,
} from "@components/LayoutWrapper/styles";
import { Title } from "@components/Title";
import { Description } from "@components/Description";
import { LinkButtonAnchor } from "@components/LinkButtonAnchor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Desafio Lacrei</title>
        <meta
          name="description"
          content="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <WrapperContainer>
        <LeftWrapperContainer>
          <Title text="Boas vindas a Lacrei Saúde" />

          <Description text="Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+" />

          <S.ButtonWrapper>
            <LinkButtonAnchor
              text="Pessoa Usuária"
              variant="fill"
              href="/pessoa-usuaria"
            />
            <LinkButtonAnchor
              text="Profissional"
              variant="outline"
              href="/profissional"
            />
          </S.ButtonWrapper>
        </LeftWrapperContainer>

        <RightWrapperContainer>
          <Image src={medicaSvg} alt="" />
        </RightWrapperContainer>
      </WrapperContainer>
    </>
  );
}
