import React from "react";
import Header from "../header";
import Footer from "../footer";
import * as S from "./PageLayout.styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </S.Wrapper>
  );
};

export default PageLayout;
