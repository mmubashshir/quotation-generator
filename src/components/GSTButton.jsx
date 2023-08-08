import useStore from "../store";

const GSTButton = () => {
  const store = useStore((state) => state);
  
  return (
    <>
      <div className="mydict">
        <div>
          <label>
            <input type="radio" name="GST12" value={12} checked={store.gstPercentage.selectedOption === "GST12"} onChange={(e) => store.handleGSTInputChange(e)}/>
            <span>12%</span>
          </label>
          <label>
            <input type="radio" name="GST18" value={18} checked={store.gstPercentage.selectedOption === "GST18"} onChange={(e) => store.handleGSTInputChange(e)}/>
            <span>18%</span>
          </label>
          <label>
            <input type="radio" name="NOGST" value={0} checked={store.gstPercentage.selectedOption === "NOGST"} onChange={(e) => store.handleGSTInputChange(e)}/>
            <span>0%</span>
          </label>
        </div>
      </div>
    </>
  );
};

export { GSTButton };
