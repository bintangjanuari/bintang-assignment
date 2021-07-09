import assets from "../../Assets";

export const getProductImage = (number) => {
  switch (number) {
    case 1:
      return assets.Product1;
    case 2:
      return assets.Product2;
    case 3:
      return assets.Product3;
    case 4:
      return assets.Product4;
    case 5:
      return assets.Product5;
    case 6:
      return assets.Product6;
    case 7:
      return assets.Product7;
    case 8:
      return assets.Product8;
    default:
      return assets.Product1;
  }
};

export const getSlug = (name) => {
  if (name) {
    return name.toLowerCase().split(" ").join("-");
  }

  return name;
};

export const compareColor = (color1, color2) => {
  if (color1) {
    return color1 === color2;
  }

  return false;
};

export const deletCart = (carts, id) => {
  let index = carts.indexOf(id);
  carts.splice(index, 1);
  return carts;
};

export const getTotal = (carts) => {
  let total = carts.reduce((a, v) => (a = a + v.total), 0);
  return total;
};
