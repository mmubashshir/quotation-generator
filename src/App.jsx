import useStore from "./store";
import "./App.css";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import PDFFile1 from "./components/PDFFile1";

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },
});

function App() {
  const store = useStore((state) => state);
  return (
    <>
      <div className="p-8 text-sm">
        <Form />
      </div>
      <Toaster />
      {/* <PDFViewer
        style={styles.viewer}
        children={<PDFFile1 pdfData={store} />}
      ></PDFViewer> */}
    </>
  );
}

export default App;
