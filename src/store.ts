import { create } from "zustand";
import isEmpty from "./components/checkEmpty";

/** Item interface */
interface Item {
  id: string;
  itemName: string;
  price: number;
  weight: number;
  qty: number;
  totalPrice: number;
}

// Add new item rows
const addItem = (items: Item[]) => [
  ...items,
  { id: crypto.randomUUID(), itemName: "", price: "", qty: 0, weight: 0, totalPrice: 0 },
];

// Delete Items
const removeItem = (items: Item[], id: string) => items.filter((item) => item.id !== id);

// Handle  Item input changes
const handleItemInputChange = (prevData: Item[], id:string, field: number, value: number | string) => {
  return prevData.map((item) => {
    const updatedItem = item.id === id ? { ...item, [field]: value } : item;
    const resultItem = {
      ...updatedItem,
      totalPrice: parseFloat((updatedItem.price * (isEmpty(updatedItem.weight) ? updatedItem.qty : updatedItem.weight)).toFixed(2)),
    };
    return resultItem;
  });
};

// Handle Client Information Changes
const handleClientInfoChange = (prevClientData, event) => {
  const { name, value } = event.target;
  return { ...prevClientData, [name]: value };
};

// Getting date in dd-mm-yyyy format
const getTodaysDate = () => {
  const d = new Date();
  const [date, month, year] = [d.getDate(), d.getMonth(), d.getFullYear()];
  return `${date}-${month}-${year}`;
};

// Calculate subTotal
const calculateTotal = (items, { percent }) => {
  let subtotal = 0;
  items.forEach((item) => {
    const price = parseFloat(item.price);
    const measure = isEmpty(item.weight) ? parseInt(item.qty) : parseFloat(item.weight);
    if (!isNaN(price) && !isEmpty(measure)) {
      subtotal += price * measure;
    }
  });

  const gstPercentage = parseInt(percent) * 0.01; // 18% GST
  const gst = subtotal * gstPercentage;
  const grandTotal = subtotal + gst;

  return {
    subtotal: subtotal.toFixed(2),
    gst: gst.toFixed(2),
    grandTotal: grandTotal.toFixed(2),
  };
};

// Creating store using zustand for state management

const useStore = create((set) => ({
  // Only for Item State Management
  items: [
    { id: crypto.randomUUID(), itemName: "", price: 0, qty: 0,weight: 0, totalPrice: 0 },
  ],
  itemContentsType: "qty",
  gstPercentage: { selectedOption: "GST18", percent: 18 },
  addItem: () =>
    set((state) => {
      const updatedItems = addItem(state.items);
      const { subtotal, gst, grandTotal } = calculateTotal(
        updatedItems,
        state.gstPercentage
      );
      return {
        items: updatedItems,
        subtotal,
        gst,
        grandTotal,
      };
    }),
  handleItemInputChange: (id, field, value) =>
    set((state) => {
      const updatedItems = handleItemInputChange(state.items, id, field, value);
      const { subtotal, gst, grandTotal } = calculateTotal(
        updatedItems,
        state.gstPercentage
      );
      return {
        items: updatedItems,
        subtotal,
        gst,
        grandTotal,
      };
    }),
  removeItem: (id: string) =>
    set((state) => ({
      items: removeItem(state.items, id),
    })),
  handleGSTInputChange: (event) =>
    set((state) => {
      const updatedGST = {
        ...state.gstPercentage,
        selectedOption: event.target.name,
        percent: event.target.value,
      };
      console.log(updatedGST);
      const { subtotal, gst, grandTotal } = calculateTotal(
        state.items,
        updatedGST
      );
      return { gstPercentage: updatedGST, subtotal, gst, grandTotal };
    }),
    handleItemContentsType: (value) => 
    set(state => {
      return {...state.itemContentsType,itemContentsType: value}
    }) ,
  subtotal: 0,
  gst: 0,
  grandTotal: 0,
  // Only for Client Info State Management
  clientInfo: {
    name: "",
    address: "",
    date: getTodaysDate(),
  },
  handleClientInfoChange: (event) =>
    set((state) => ({
      clientInfo: handleClientInfoChange(state.clientInfo, event),
    })),
}));

export default useStore;