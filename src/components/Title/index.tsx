import * as S from "./styles";

interface ITitleContainerProps {
  text: string;
}

export const Title = ({ text }: ITitleContainerProps) => {
  return <S.TitleContainer>{text}</S.TitleContainer>;
};
