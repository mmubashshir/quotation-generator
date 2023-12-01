import useStore from "../store";
import { GSTButton } from "./GSTButton";
import isEmpty from "./checkEmpty";
const Items = () => {
  const store = useStore((state) => state);
  return (
    <>
      <section className="flex flex-col" id="quotation-items">
        <h3 className="text-xl font-medium mb-2">Quotation Item</h3>
        <div id="items-table">
          <div id="items-header" className="flex gap-2 ">
            <span className="w-5/12 font-normal">Item</span>
            <span className="w-3/12 font-normal">Price</span>
            <span className="w-1/12 font-normal">Wt</span>
            <span className="w-1/12 font-normal">Qty.</span>
            <span className="w-3/12 font-normal">Total Price</span>
            <span className="font-normal w-12">
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
            </span>
          </div>
          {/* items map */}
          {store.items.map((item, index) => {
            return (
              <div key={item.id} className="flex gap-2">
                <input
                  className="text-sm mt-1 p-3 w-4/12 rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                  name="itemName"
                  type="text"
                  value={item.itemName}
                  placeholder={`Item ${index + 1}`}
                  onChange={(e) =>
                    store.handleItemInputChange(
                      item.id,
                      "itemName",
                      e.target.value
                    )
                  }
                  // contentEditable
                  // required
                />
                <input
                  className="text-sm mt-1 p-3 w-3/12 rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                  name="price"
                  value={item.price === 0 ? "" : item.price}
                  type="number"
                  placeholder="₹100"
                  onChange={(e) =>
                    store.handleItemInputChange(
                      item.id,
                      "price",
                      isEmpty(e.target.value) ? 0 : parseInt(e.target.value)
                    )
                  }
                  required
                />
                <input
                  className="text-sm mt-1 p-3 w-1/12 text-center rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                  name="weight"
                  value={item.weight === 0 ? "" : item.weight}
                  type="number"
                  placeholder="1.0"
                  onChange={(e) =>
                    store.handleItemInputChange(
                      item.id,
                      "weight",
                      isEmpty(e.target.value) ? 0 : parseFloat(e.target.value)
                    )
                  }
                  required={item.qty === 0}
                />
                <input
                  className="text-sm mt-1 p-3 w-1/12 text-center rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                  name="qty"
                  type="number"
                  value={item.qty === 0 ? "" : item.qty}
                  placeholder="1"
                  onChange={(e) =>
                    store.handleItemInputChange(
                      item.id,
                      "qty",
                      isEmpty(e.target.value) ? 0 : parseFloat(e.target.value)
                    )
                  }
                  required={item.weight === 0}
                />
                <input
                  className="text-sm text-opacity-75 mt-1 p-3 w-3/12 rounded-xl bg-gray-100 focus:outline-none ring-2 ring-transparent focus:ring-blue-600"
                  name="total"
                  type="number"
                  value={item.totalPrice}
                  placeholder="₹100"
                  readOnly
                  required
                />
                <button
                  type="button"
                  className="rounded-full p-3 bg-gray-50 hover:bg-red-100 disabled:invisible"
                  onClick={() => store.removeItem(item.id)}
                  disabled={store.items.length === 1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={store.addItem}
            id="add-item-btn"
            className="my-2 p-2 rounded-xl hover:bg-blue-100  text-[#1453ff] font-semibold"
          >
            <span className="text-xl">+</span> Add Item
          </button>
        </div>
        <div className="flex flex-col gap-1.5 items-end justify-start sm:mr-16">
          <div className="flex text-left w-72 justify-between">
            <h3 className="text-lg font-medium">Sub Total</h3>
            <h3 className="text-lg font-medium">
              ₹<span id="GST">{store.subtotal ? store.subtotal : "0.00"}</span>
            </h3>
          </div>
          <div className="flex text-left w-72 justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg font-medium">GST</h3>
              <GSTButton />
            </div>
            <h3 className="text-lg font-medium">
              ₹<span id="GST">{store.gst ? store.gst : "0.00"}</span>
            </h3>
          </div>
          <div className="flex text-left w-72 justify-between">
            <h2 className="text-lg font-semibold">Total Amount</h2>
            <h2 className="text-lg font-semibold">
              ₹
              <span id="totalAmount">
                {store.grandTotal ? store.grandTotal : "0.00"}
              </span>
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Items;
