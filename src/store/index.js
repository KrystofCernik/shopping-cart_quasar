import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    itemQuantity: state => product => {
      const item = state.cart.find(item => item.id === product.id)

      if (item) {
        return item.quantity
      } else {
        return null
      }
    },
    cartQuantity: (state) => {
      return state.cart.reduce((acc, product) => {
        return product.quantity + acc;
      }, 0)
    }
  },  
  mutations: {
    Add_Item(state, product) {
      let item = state.cart.find(item => item.id === product.id)

      if(item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1});
      }
    },
    Remove_Item(state, product) {
      let item = state.cart.find(item => item.id === product.id)

      if(item) {
        if(item.quantity > 1) {
          item.quantity--
        } else {
          item.quantity
        }
      }
    },
    Remove_Items(state, index) {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    addToCart(context, product) {
      context.commit('Add_Item', product);
    },
    removeFromCart(context, product) {
      context.commit('Remove_Item', product)
    },
    removeAllFromCart(context, index) {
      context.commit('Remove_Items', index);
    }
  },
  modules: {
  }
})
