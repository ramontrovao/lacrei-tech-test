import { TitleContainer } from "./styles";

interface ITitleContainerProps {
  text: string;
}

export const Title = ({ text }: ITitleContainerProps) => {
  return <TitleContainer>{text}</TitleContainer>;
};
