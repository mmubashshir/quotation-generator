import useStore from "./store"
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import "./App.css";
import Form from "./components/Form";
import PDFFile from "./components/PDFFile";
import { Toaster } from "react-hot-toast";
const styles = StyleSheet.create({
  viewer: {
    border: "none",
    height:500,
    width: "40%",
    backgroundColor: "transparent",
  }
})
function App() {
  const store = useStore((state) => state);
  return (
    <>
      <div className="p-8 text-sm">
        <Form />
        {/* <PDFViewer style={styles.viewer} showToolbar={false}>
          <PDFFile pdfData={store} type={true} />
        </PDFViewer> */}
      </div>
      <Toaster />
    </>
  )
}

export default App;
