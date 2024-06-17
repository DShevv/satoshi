const toFixedIfNecessary = (value) => {
  return +parseFloat(value).toFixed(2);
};

export default toFixedIfNecessary;
