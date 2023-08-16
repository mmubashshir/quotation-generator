import useStore from "./store"
import "./App.css";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";

function App() {
  const store = useStore((state) => state);
  return (
    <>
      <div className="p-8 text-sm">
        <Form />
      </div>
      <Toaster />
    </>
  )
}

export default App;
