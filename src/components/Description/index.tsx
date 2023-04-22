import { DescriptionContainer } from "./styles";

interface IDescriptionContainerProps {
  text: string;
  hasBar?: boolean;
}

export const Description = ({
  text,
  hasBar = false,
}: IDescriptionContainerProps) => {
  return <DescriptionContainer hasBar={hasBar}>{text}</DescriptionContainer>;
};
