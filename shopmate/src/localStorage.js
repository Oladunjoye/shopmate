export const loadState = () => {
    try {
     
       const cartItems = JSON.parse(localStorage.getItem('cartItem'));
       const cartId = JSON.parse(localStorage.getItem('cartId'));
       
        const serializedState  = {
            cartId,
            cartItems,
            filterItems: []}
            console.log("Serialised ", serializedState)
      if (cartItems === null) {
        return undefined;
      }
      return serializedState
    } catch (err) {
      return undefined;
    }
  }; 

  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cart', serializedState);
    } catch {
      // ignore write errors
    }
  };