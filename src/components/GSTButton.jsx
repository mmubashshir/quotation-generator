import useStore from "../store";
import { Drawer } from '@mui/material';

const GSTButton = () => {
  const store = useStore((state) => state);
  const gstPercentage = {
    18: "GST18",
    12: "GST12",
    5: "GST5",
    0: "NOGST"
  }
  return (
    <>
      <div className="mydict">
        <div>
          {Object.entries(gstPercentage).map(([key, value]) => (
            <label>
              <input
                type="radio"
                key={key}
                name= {value}
                value={key}
                checked={store.gstPercentage.selectedOption === value}
                onChange={(e) => store.handleGSTInputChange(e)}
              />
              <span>{key}%</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export { GSTButton };
