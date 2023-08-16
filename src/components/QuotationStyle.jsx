const QuotationStyle = ({ handleToggle }) => {
  return (
    <>
      <div className="flex gap-2 items-center">
        <span>Print Format</span>
        <div className="toggle-switch">
          <input
            onChange={handleToggle}
            className="toggle-input"
            id="toggle"
            type="checkbox"
          />
          <label className="toggle-label" htmlFor="toggle"></label>
        </div>
        <span>Share Format</span>
      </div>
    </>
  );
};

export default QuotationStyle;
