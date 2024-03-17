import create from "zustand";
// vår store
export const useStore = create((set) => ({
  cart: [],
  orderNr: null,
  eta: null,
  //"set" för att uppdatera staten
  setOrderNr: (orderNr) => set(() => ({ orderNr })),
  setEta: (eta) => set(() => ({ eta })),
  //funktionen för att lägg till i cart
  addToCart: (item) =>
    set((state) => {
      // Kollar om objektet redan finns i kundvagnen
      const existingItem = state.cart.find(
        (cartItem) => cartItem.item.title === item.title
      );
      if (existingItem) {
        // Om objektet redan finns, öka dess kvantitet "+1"
        existingItem.quantity += 1;
        return { cart: [...state.cart] };
      } else {
        // Om objektet inte finns, lägg till det i kundvagnen med en kvantitet på 1
        return { cart: [...state.cart, { item, quantity: 1 }] };
      }
    }),
  // funktionenen "addera"
  increaseQuantity: (title) =>
    set((state) => {
      //spara i "ny kundvagen"
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.item.title === title) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          //lägg till som en ny item i kundvagen
          return cartItem;
        }
      });
      return { cart: newCart };
    }),
  //funktionenen "subtrahera"
  decreaseQuantity: (title) =>
    set((state) => {
      const newCart = state.cart.map((cartItem) => {
        if (cartItem.item.title === title && cartItem.quantity > 0) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
      // vår kundvagen uupdateras med värdet i den "nya kundvagen"
      return { cart: newCart };
    }),
  //skickar order och tar emot order nr och ETA
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
      // Uppdatera orderNr och eta med data från api
      set(() => ({ orderNr: data.orderNr, eta: data.eta }));
    } catch (error) {
      console.error("Error:", error);
    }
  },
  // Detta återställer cart till en tom array igen, redo för en ny beställning
  clearCart: () => set({ cart: [] }),
}));

export default useStore;
