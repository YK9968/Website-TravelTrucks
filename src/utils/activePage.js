import clsx from "clsx";

export const changeActivePage = ({ isActive }, activeClass, inactiveClass) => {
  return clsx(inactiveClass, isActive && activeClass);
};
