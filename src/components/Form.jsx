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
import TransitionsModal from "./Modal";
const Form = () => {
  const store = useStore((state) => state);
  const [loadingFile, setLoadingFile] = useState(false);
  const getFullLetterHead = useState(true)
  const [toggle, setToggle] = useState(false)
  const handleToggle = (event) => {
    setToggle(event.target.checked)
  }
  const handleEmailButtonClick = (url) => {  
    event.preventDefault()
    const emailSubject = encodeURIComponent('My PDF Attachment');
    const emailBody = encodeURIComponent('Please find the attached PDF document.');
    const emailAttachments = encodeURIComponent(url);
  
    const mailtoUrl = `mailto:?subject=${emailSubject}&body=${emailBody}&attachment=${emailAttachments}`;
  
    window.location.href = mailtoUrl;
  };
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
        <BlobProvider document={<PDFFile pdfData={store} type={toggle}/>}>
          {({ url, loading }) => (
            <form onSubmit={(event) => handleDownload(url, event)}>
              <ClientInfo handleToggle={handleToggle}/>
              <Items />
              <div className="flex justify-between items-center` mt-4" id="submit">
               <TransitionsModal pdfUrl={url} /> 
               <button
                  type="submit"
                  className="drop-shadow-xl disabled:opacity-50 inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-white bg-[#1453ff] hover:bg-opacity-90 "
                >
                  {loadingFile ? (
                    <Loading />
                  ) : (
                    <>
                      <img className="h-4 pr-2" src={downloadIcon} alt=""/>
                      Download PDF
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
