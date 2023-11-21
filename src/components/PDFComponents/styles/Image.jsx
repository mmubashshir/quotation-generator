import React from "react";
import { Image as PdfImage } from "@react-pdf/renderer";
import compose from "./compose";

const Image = ({ className, value, fixed }) => {
  return (
    <PdfImage
      style={{
        ...compose(`image ${className ? className : ""}`),
      }}
      src={value}
      fixed={fixed}
    />
  );
};

export default Image;
