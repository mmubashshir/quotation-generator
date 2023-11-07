import React, { FC } from "react";
import { Text as PdfText } from "@react-pdf/renderer";
import compose from "./styles/compose";

const Text = ({ className, children }) => {
  return (
    <>
      <PdfText style={compose("span " + (className ? className : ""))}>
        {children}
      </PdfText>
    </>
  );
};

export default Text;
