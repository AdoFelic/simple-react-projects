const saveToLocalStorage = cart => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getFromLocalStorage = () => {
  const emptyCart = { payload: [] };
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart || emptyCart;
};

export const fetchCart = async () => getFromLocalStorage();

export const addToCart = async (robot, quantity) => {
  const cart = await fetchCart();
  const exists = cart.payload.some(item => item.robot.id === robot.id);

  if (exists) {
    cart.payload.forEach(item => {
      if (item.robot.id === robot.id) {
        item.quantity += quantity;
      }
      return item;
    });
    saveToLocalStorage(cart);
    return cart;
  } else {
    cart.payload.push({ robot, quantity });
    saveToLocalStorage(cart);
    return cart;
  }
};

export const removeFromCart = async robotId => {
  const currentCart = await fetchCart();
  const exists = currentCart.payload.some(item => item.robot.id === robotId);

  if (!exists) {
    throw Error("Item does not exist in the cart!");
  }

  let itemToRemoveOrReduce = currentCart.payload.find(
    item => item.robot.id === robotId
  );

  let newCart = { payload: [] };
  if (itemToRemoveOrReduce.quantity > 1) {
    currentCart.payload.forEach(item => {
      if (item.robot.id === robotId) {
        item.quantity -= 1;
      }
      newCart.payload.push(item);
    });
  } else {
    let filteredpayload = currentCart.payload.filter(
      item => item.robot.id !== robotId
    );
    newCart.payload = filteredpayload;
  }
  saveToLocalStorage(newCart);
  return newCart;
};
