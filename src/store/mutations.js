/**
 * 商城Vuex-mutations
 */
export default {
  SAVEUSERNAME(state, username) {
    state.username = username;
  },
  SAVECARTCOUNT(state, count) {
    state.cartCount = count;
  }
}