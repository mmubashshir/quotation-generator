import React, { FC } from "react";
import { Page as PdfPage } from "@react-pdf/renderer";
import compose from "./styles/compose";

const Page = ({ className, children }) => {
  return (
    <>
      <PdfPage
        size="A4"
        style={compose("page " + (className ? className : ""))}
      >
        {children}
      </PdfPage>
    </>
  );
};

export default Page;
