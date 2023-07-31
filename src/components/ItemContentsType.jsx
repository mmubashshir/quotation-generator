import useStore from "../store";
const ItemContentsType = () => {
  const store = useStore((state) => state);
  return (
    <>
      <div className="mydict">
        <div>
          <label>
            <input
              type="radio"
              name="qty"
              value={"qty"}
              checked={store.itemContentsType === "qty"}
              onChange={(e) => store.handleItemContentsType(e.target.value)}
            />
            <span>Quantity</span>
          </label>
          <label>
            <input
              type="radio"
              name="weight"
              value={"weight"}
              checked={store.itemContentsType === "weight"}
              onChange={(e) => store.handleItemContentsType(e.target.value)}
            />
            <span>Weight</span>
          </label>
          <label>
            <input
              type="radio"
              name="both"
              value={"both"}
              checked={store.itemContentsType === "both"}
              onChange={(e) => store.handleItemContentsType(e.target.value)}
            />
            <span>Both</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ItemContentsType;
