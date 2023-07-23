import { BlobProvider } from "@react-pdf/renderer";
import useStore from "../store";
import PDFFile from "./PDFFile";
import ClientInfo from "./ClientInfo";
import Items from "./Items";
import { Link } from "react-router-dom";
const Form = () => {
  const store = useStore((state) => state);
  return (<>
    <main className=" bg-white p-8 sm:mx-[10%] lg:mx-[20%] xl:mx-[25%] rounded-xl drop-shadow-lg">
      <ClientInfo />
      <Items />
      <div className="flex justify-end mt-4" id="submit">
        <button
          type="button"
          className="drop-shadow-xl inline-flex float-right items-center px-4 py-3 font-semibold leading-6 text-sm shadow rounded-xl text-white bg-[#1453ff] hover:bg-opacity-90 "
          disabled=""
        >
          <svg
            id="spinningCircle"
            className="motion-reduce:hidden  hidden -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <BlobProvider document={<PDFFile pdfData={store} />}>
            {({ url }) => (
              <Link
                to={url}
                download="Example-PDF.pdf"
                target="_blank"
                rel="noreferrer">
                  Download PDF
                </Link>

            )}
          </BlobProvider>

        </button>
      </div>
    </main>
  </>);
}

export default Form