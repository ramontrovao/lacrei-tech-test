import Head from "next/head";
import Image from "next/image";

import variosMedicosSvg from "@assets/varios-medicos.svg";

import {
  LeftWrapperContainer,
  RightWrapperContainer,
  WrapperContainer,
} from "@components/LayoutWrapper/styles";
import { Title } from "@components/Title";
import { Description } from "@components/Description";

export default function Profissional() {
  return (
    <>
      <Head>
        <title>Profissional | Desafio Lacrei</title>
        <meta
          name="description"
          content="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <WrapperContainer>
        <LeftWrapperContainer>
          <Title text="Profissional" />

          <Description
            text="Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+"
            hasBar
          />
        </LeftWrapperContainer>

        <RightWrapperContainer>
          <Image src={variosMedicosSvg} alt="" />
        </RightWrapperContainer>
      </WrapperContainer>
    </>
  );
}
