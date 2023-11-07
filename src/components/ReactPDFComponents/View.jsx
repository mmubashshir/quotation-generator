import React, { FC } from "react";
import { View as PdfView } from "@react-pdf/renderer";
import compose from "./styles/compose";

const View = ({ className, children }) => {
  return (
    <>
      <PdfView style={compose("view " + (className ? className : ""))}>
        {children}
      </PdfView>
    </>
  );
};

export default View;
