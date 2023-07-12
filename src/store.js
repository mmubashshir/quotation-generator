import { create } from 'zustand';

// Add new item rows
const addItem = (items) => [
    ...items,
    { id: crypto.randomUUID(), itemName: "", price: "", qty: "", totalPrice: 0 },
]

// Delete Items
const removeItem = (items, id) => {
    return items.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    })
};

// Handle  Item input changes
const handleItemInputChange = (prevData, id, field, value) => {
    return prevData.map((item) => {
        const updatedItem = item.id === id ? { ...item, [field]: value } : item
        const resultItem = { ...updatedItem, totalPrice: (updatedItem.price * updatedItem.qty).toFixed(2) };
        return resultItem
    })
};

// Handle Client Information Changes
const handleClientInfoChange = (prevClientData, event) => {
    const { name, value } = event.target;
    return { ...prevClientData, [name]: value };
}

// Getting date in dd-mm-yyyy format
const getTodaysDate = () => {
    const d = new Date();
    const [date, month, year] = [d.getDate(), d.getMonth(), d.getFullYear()];
    return `${date}-${month}-${year}`;
}

// Calculate subTotal 
const calculateTotal = (items) => {
    let subtotal = 0;
    items.forEach((item) => {
        const price = parseFloat(item.price);
        const quantity = parseInt(item.qty);
        if (!isNaN(price) && !isNaN(quantity)) {
            subtotal += price * quantity;
        }
    });

    const gstPercentage = 0.18; // 18% GST
    const gst = subtotal * gstPercentage;
    const grandTotal = subtotal + gst;

    return {
        subtotal: subtotal.toFixed(2),
        gst: gst.toFixed(2),
        grandTotal: grandTotal.toFixed(2)
    };
};

// Creating store using zustand for state management

const useStore = create(
    (set) => ({
        // Only for Item State Management        
        items: [{ id: crypto.randomUUID(), itemName: "", price: 0, qty: 0, totalPrice: 0 }],
        addItem: () => set((state) => {
            const updatedItems = addItem(state.items);
            const { subtotal, gst, grandTotal} = calculateTotal(updatedItems);
            return {
                items: updatedItems,
                subtotal,
                gst,
                grandTotal
            };
        }),
        handleItemInputChange: (id, field, value) => set((state) => {
            const updatedItems = handleItemInputChange(state.items, id, field, value);
            const { subtotal, gst, grandTotal} = calculateTotal(updatedItems);
            return {
                items: updatedItems,
                subtotal,
                gst,
                grandTotal
            };
        }),
        removeItem: (id) => set((state) => ({
            items: removeItem(state.items, id)
        })),
        subtotal: 0,
        gst: 0,
        grandTotal: 0,
        // Only for Client Info State Management

        clientInfo: { name: "", email: "", address: "", date: getTodaysDate(), title: "", },
        handleClientInfoChange: (event) => set((state) => ({
            clientInfo: handleClientInfoChange(state.clientInfo, event)
        }))
    })
)

export default useStore;
