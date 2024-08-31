export const vehicleTypes = (items, key) => {
  return {
    types: [...new Set(items.map((item) => item[key]))],
    key,
  };
};
