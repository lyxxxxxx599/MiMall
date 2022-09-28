/**
 * 商城Vuex-actions
 */
export default {
  saveUserName(context,username){
    context.commit('SAVEUSERNAME', username);
  },
  saveCartCount(context, count) {
    context.commit('SAVECARTCOUNT', count);
  }
}