import React, { FC } from "react";
import { Document as PdfDocument } from "@react-pdf/renderer";

const Document = ({ pdfMode, children }) => {
  return <PdfDocument>{children}</PdfDocument>;
};

export default Document;
