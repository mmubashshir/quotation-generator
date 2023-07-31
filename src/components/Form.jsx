import { BlobProvider } from "@react-pdf/renderer";
import useStore from "../store";
import PDFFile from "./PDFFile";
import ClientInfo from "./ClientInfo";
import Items from "./Items";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useState } from "react";
import { toast } from "react-hot-toast";
import downloadIcon from "../assets/download-icon.png"
const Form = () => {
  const store = useStore((state) => state);
  const [loadingFile, setLoadingFile] = useState(false);
  const handleDownload = async (url, event) => {
    event.preventDefault();
    setLoadingFile(true);
    try {
      const a = document.createElement("a");
      a.href = url;
      a.download = "sample.pdf"; // Change the file name here if needed
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
        <BlobProvider document={<PDFFile pdfData={store} />}>
          {({ url, loading }) => (
            <form onSubmit={(event) => handleDownload(url, event)}>
              <ClientInfo />
              <Items />
              <div className="flex justify-end mt-4" id="submit">
                <button
                  // onClick={() => handleDownload(url)}
                  type="submit"
                  className="drop-shadow-xl disabled:opacity-50 inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-white bg-[#1453ff] hover:bg-opacity-90 "
                >
                  {/* <Link
                  to={url}
                  download="Example-PDF.pdf"
                  target="_blank"
                  rel="noreferrer"
                > */}
                  {loadingFile ? (
                    <Loading />
                  ) : (
                    <>
                      <img className="h-4 pr-2" src={downloadIcon} alt=""/>
                      Download PDF
                    </>
                  )}
                  {/* </Link> */}
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
