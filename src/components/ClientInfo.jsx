import useStore from "../store";
import QuotationStyle from "./QuotationStyle";

const ClientInfo = ({ handleToggle }) => {
  const store = useStore((state) => state);
  return (
    <>
      <section className="flex flex-col gap-3 mb-4" id="heading">
        <h3 className="text-xl font-medium">Create New Quotation</h3>
        <h2 className="text-3xl font-medium">
          Quotation{" "}
          <span className="text-[#1453ff]">
            #{store.clientInfo.name.slice(0, 7)}
            {store.clientInfo.date}
          </span>
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
            <div className="relative mt-0">
              <input
                value={store.clientInfo.date}
                onChange={(event) => store.handleClientInfoChange(event)}
                className="disabled:opacity-75 text-sm p-3  rounded-xl w-full bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                name="date"
                type="date"
              />
            </div>
          </div>
        </div>
        <label className="mt-2 font-normal" htmlFor="address">
          Address
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
        <QuotationStyle handleToggle={handleToggle} />
      </section>
    </>
  );
};

export default ClientInfo;
