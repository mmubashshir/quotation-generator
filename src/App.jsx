// import { Document } from "react-pdf";
import "./App.css";
import Form from "./components/Form";
import PDFCanvas from "./components/PDFCanvas";
import PDFFile from "./components/PDFFile";
import useStore from "./store";
import { BlobProvider, PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer'


function App() {
  const store = useStore((state) => state)
  const styles = StyleSheet.create({
    viewer: {
      border: "none",
      height: 500,
      width: "100%",
      backgroundColor: "transparent",
    }
  })
  
  return (
    <>
      <div className="p-8">

        <Form />
        {/* <PDFViewer style={styles.viewer} showToolbar={false}>
          <PDFFile pdfData={store} />
        </PDFViewer> */}
        {/* <BlobProvider document={<PDFFile pdfData={store} />}>
          {({ blob, url }) => (
            <PDFCanvas pdfURL={url} />
          )}
        </BlobProvider> */}
      </div>


    </>
  )
}

export default App;
