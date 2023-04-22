import { ReactNode } from "react";
import { useRouter } from "next/router";

import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

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
