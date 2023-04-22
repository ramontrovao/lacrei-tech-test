import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface IDefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  const { route } = useRouter();

  return (
    <>
      <Header pageActive={route} />

      {children}

      <Footer pageActive={route} />
    </>
  );
};
