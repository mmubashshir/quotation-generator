import { BlobProvider } from "@react-pdf/renderer";
import useStore from "../store";
import PDFFile from "./PDFFile";
import ClientInfo from "./ClientInfo";
import Items from "./Items";
import Loading from "./Loading";
import { useState } from "react";
import { toast } from "react-hot-toast";
import downloadIcon from "../assets/download-icon.png";
import resetIcon from "../assets/reset-icon.png";
import TransitionsModal from "./Modal";
const Form = () => {
  const store = useStore((state) => state);
  const [loadingFile, setLoadingFile] = useState(false);
  const getFullLetterHead = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleToggle = (event) => {
    setToggle(event.target.checked);
  };
  const handleDownload = async (url, event) => {
    event.preventDefault();
    setLoadingFile(true);
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = store.clientInfo.name.slice(0, 7) + store.clientInfo.date; // Change the file name here if needed
      a.click();
      toast.success("PDF Downloaded");
    } catch {
      toast.error("Error downloading");
    } finally {
      setLoadingFile(false);
    }
  };
  return (
    <>
      <main className=" bg-white p-8 sm:mx-[10%] lg:mx-[20%] xl:mx-[25%] rounded-xl drop-shadow-lg">
        <BlobProvider
          document={<PDFFile pdfData={store} getFullLetterHead={toggle} />}
        >
          {({ url, loading }) => (
            <form onSubmit={(event) => handleDownload(url, event)}>
              <ClientInfo handleToggle={handleToggle} />
              <Items />
              <div
                className="flex justify-center md:justify-between items-center gap-2 mt-4"
                id="submit"
              >
                <div className="flex gap-2">
                  <TransitionsModal pdfUrl={url} />
                  <button
                    className="drop-shadow-md disabled:opacity-50 inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-red-600 bg-slate-100 bg-opacity-20 hover:bg-opacity-25 "
                    type="reset"
                    onClick={() => store.reset()}
                  >
                    <img className="h-4 md:pr-2" src={resetIcon} alt="" /><span className="hidden md:block">Reset</span> 
                  </button>
                </div>
                <button
                  type="submit"
                  className="drop-shadow-xl disabled:opacity-50 inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-white bg-[#1453ff] hover:bg-opacity-90 "
                >
                  {loadingFile ? (
                    <Loading />
                  ) : (
                    <>
                      <img className="h-4 pr-2" src={downloadIcon} alt="" />
                      Download
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </BlobProvider>
      </main>
    </>
  );
};

export default Form;
