import React, { FC } from "react";
import { View as PdfView } from "@react-pdf/renderer";
import compose from "./compose";

const View = ({ className, children, wrap }) => {
  return (
    <>
      <PdfView
        wrap={wrap}
        style={compose("view " + (className ? className : ""))}
      >
        {children}
      </PdfView>
    </>
  );
};

export default View;
