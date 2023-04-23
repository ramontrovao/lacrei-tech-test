import Head from "next/head";
import Image from "next/image";

import pessoasCelularSvg from "@assets/pessoas-celular.svg";

import {
  LeftWrapperContainer,
  RightWrapperContainer,
  WrapperContainer,
} from "@components/LayoutWrapper/styles";
import { Title } from "@components/Title";
import { Description } from "@components/Description";

export default function PessoaUsuaria() {
  return (
    <>
      <Head>
        <title>Pessoa Usuária | Desafio Lacrei</title>
        <meta
          name="description"
          content="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.png" />
      </Head>

      <WrapperContainer>
        <LeftWrapperContainer>
          <Title text="Pessoa Usuária" />

          <Description
            text="A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
            hasBar
          />
        </LeftWrapperContainer>

        <RightWrapperContainer>
          <Image src={pessoasCelularSvg} alt="" />
        </RightWrapperContainer>
      </WrapperContainer>
    </>
  );
}
