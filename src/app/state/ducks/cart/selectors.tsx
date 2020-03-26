const getProducts = (state: any) => {
  return state && state.cart && state.cart.data;
}

export { getProducts };