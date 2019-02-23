const saveToLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

const getFromLocalStorage = () => {
  const emptyCart = { payload: [] };
  const cart = JSON.parse(localStorage.getItem('cart'));
  return cart || emptyCart
}

export const fetch = async () => getFromLocalStorage();

export const fetchCart = async () => getFromLocalStorage();

export const addToCart = async (robot, quantity) => {  
  const cart = await fetch();
  const exists = cart.payload.findIndex(item => item.robot.id === robot.id) > -1;
  
  if (exists) {
    cart.payload.map(item => {
      if (item.robot["id"] === robot.id) {
        item["quantity"] += quantity;
      }
      return item;
    });
    const newCart = {
      ...cart,
      payload: [
        ...cart.payload
      ]
    }
    saveToLocalStorage(newCart);
    return newCart;
  } else {
    let newItem = { robot, quantity };
    const newCart = {
      ...cart,
      payload: [
        ...cart.payload,
        newItem
      ]
    }
    saveToLocalStorage(newCart);
    return newCart;
  }
}

export const removeFromCart = async (robotId) => {
  const currentCart = await fetch()
  const exists = currentCart.payload.findIndex(item => item.robot.id === robotId) > -1;

  if (!exists) {
    throw Error( 'Item does not exist in the cart!' );
  }

  let itemToRemoveOrReduce = currentCart.payload.find(item => item.robot.id === robotId);

  let newCart = {payload: []};
  if (itemToRemoveOrReduce['quantity'] > 1) {
    currentCart.payload.forEach(item => {
      if (item.robot.id === robotId) {
        item['quantity'] -= 1;
      }
      newCart.payload.push(item);
    })
  } else {
    let filteredpayload = currentCart.payload.filter(item => item.robot.id !== robotId);
    newCart.payload = filteredpayload;
  }
  saveToLocalStorage(newCart);
  return newCart;
}