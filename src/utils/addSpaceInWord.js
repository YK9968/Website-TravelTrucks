export const addSpace = (str) => {
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase() && str[i - 1] !== " ") {
      return str.slice(0, i) + " " + str.slice(i);
    }
  }
  return str;
};
