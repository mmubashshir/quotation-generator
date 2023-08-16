const isEmpty = (value) => {
  return value === 0 || value === "" || isNaN(value) || value === undefined;
};

export default isEmpty;
