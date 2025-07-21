import React from "react";
import Header from "../header";
import Footer from "../footer";
import * as S from "./PageLayout.styles";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.CustomMain>
        {children}
      </S.CustomMain>
      <Footer />
    </S.Wrapper>
  );
};

export default PageLayout;
