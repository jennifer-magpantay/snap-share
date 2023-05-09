export const calculateCardWidth = (width) => {
  if (width <= 600) {
    return "100%";
  }

  if (width > 600 && width < 1440) {
    return "calc(100% / 2 - 8px)";
  }
};
