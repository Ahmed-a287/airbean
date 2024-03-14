import create from "zustand";

export const useStore = create((set) => ({
  //tom array för att spara
  cart: [],
  orderNr: null,
  eta: null,
  setOrderNr: (orderNr) => set((state) => ({ orderNr })),
  setEta: (eta) => set((state) => ({ eta })),
  addToCart: (item) =>
    set((state) => {
      // Kollar om objektet redan finns i kundvagnen
      const existingItem = state.cart.find(
        (cartItem) => cartItem.item.title === item.title
      );

      if (existingItem) {
        // Om objektet redan finns, öka dess kvantitet
        existingItem.quantity += 1;
        return { cart: [...state.cart] };
      } else {
        // Om objektet inte finns, lägg till det i kundvagnen med en kvantitet på 1
        return { cart: [...state.cart, { item, quantity: 1 }] };
      }
    }),

  increaseQuantity: (title) =>
    set((state) => {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.item.title === title) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
      return { cart: newCart };
    }),
  decreaseQuantity: (title) =>
    set((state) => {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.item.title === title && cartItem.quantity > 0) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      return { cart: newCart };
    }),

  sendOrder: async (cart) => {
    try {
      const order = cart.map((cartItem) => ({
        name: cartItem.item.title,
        price: cartItem.item.price,
        quantity: cartItem.quantity,
      }));

      const response = await fetch(
        "https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ details: { order } }),
        }
      );
      const data = await response.json();
      console.log("Order response:", data);

      // Uppdatera orderNr och eta med data från servern
      set((state) => ({ orderNr: data.orderNr, eta: data.eta }));
    } catch (error) {
      console.error("Error:", error);
    }
  },

  clearCart: () => set({ cart: [] }), // Detta sätter cart till en tom array, vilket "tömmer" kundvagnen
}));

export default useStore;
