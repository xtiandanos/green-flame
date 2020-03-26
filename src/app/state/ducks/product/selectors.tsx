const getProducts = (state: any) => {
  return state && state.product && state.product.data;
}

export { getProducts };