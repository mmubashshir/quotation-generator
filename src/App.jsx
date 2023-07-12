import useStore from "./store"
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import "./App.css";
import Form from "./components/Form";
import PDFFile from "./components/PDFFile";
const styles = StyleSheet.create({
  viewer: {
    border: "none",
    height: 1000,
    width: "100%",
    backgroundColor: "transparent",
  }
})
function App() {
  const store = useStore((state) => state);
  return (
    <>
      <div className="p-8">
        {/* <Form /> */}
        <PDFViewer style={styles.viewer} showToolbar={true}>
          <PDFFile pdfData={store} />
        </PDFViewer>
      </div>
    </>
  )
}

export default App;
