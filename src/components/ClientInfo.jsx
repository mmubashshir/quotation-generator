import useStore from "../store";
import ItemContentsType from "./ItemContentsType";
const ClientInfo = () => {
  const store = useStore((state) => state);
  return (
    <>
      <section className="flex flex-col gap-3 mb-4" id="heading">
        <h3 className="text-xl font-medium">Create New Quotation</h3>
        <h2 className="text-3xl font-medium">
          Quotation <span className="text-[#1453ff]">#NR001/08/2023</span>
        </h2>
      </section>
      <section className="flex flex-col mb-4" id="client-details">
        <h3 className="text-xl font-medium mb-2">Details</h3>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col w-full md:w-1/2">
            <label className="font-normal" htmlFor="name">
              Client Name
            </label>
            <input
              className="text-sm mt-1 p-3 w-auto rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
              name="name"
              value={store.clientInfo.name}
              onChange={(event) => store.handleClientInfoChange(event)}
              placeholder="John Doe"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="font-normal" htmlFor="date">
              Issued On
            </label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-calendar2-week w-5 h-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                </svg>
              </span>
              <input
                value={store.clientInfo.date}
                className="disabled:opacity-75 text-sm p-3 pl-10 rounded-xl w-full bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                name="date"
                type="text"
                disabled
              />
            </div>
          </div>
        </div>
        <label className="mt-2 font-normal" htmlFor="address">
          {/* Main*/} Address
        </label>
        <textarea
          className="text-sm mt-1 p-3 rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
          name="address"
          value={store.clientInfo.address}
          onChange={(event) => store.handleClientInfoChange(event)}
          placeholder="123 Main Street,&#10;Anytown,&#10;India"
          type="text"
          required
        />
        {/* <label className="mt-2 font-normal" htmlFor="sub-address">
            Sub Address
          </label>
          <input
            className="text-sm mt-1 p-3 rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
            name="sub-address"
            type="text"
          /> */}
        {/* <div className="flex flex-col items-center gap-4 md:flex-row">
          <label className="mt-2 font-normal" htmlFor="title">
            Quote Item By
          </label>
          <ItemContentsType />
        </div> */}
      </section>
    </>
  );
};

export default ClientInfo;
