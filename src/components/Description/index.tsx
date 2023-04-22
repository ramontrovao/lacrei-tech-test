import * as S from "./styles";

interface IDescriptionContainerProps {
  text: string;
  hasBar?: boolean;
}

export const Description = ({
  text,
  hasBar = false,
}: IDescriptionContainerProps) => {
  return (
    <S.DescriptionContainer hasBar={hasBar}>{text}</S.DescriptionContainer>
  );
};
