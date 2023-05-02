export default {
    namespaced:true,
    state(){
        return {
            items: [], 
            total: 0, 
            qty: 0 
        };
    },
    mutations:{
        // addProductToCart(productData) {
        addProductToCart (state,payload) {
           

            const productData = payload;
            // const productInCartIndex = this.cart.items.findIndex(, we update the info below to that
            const productInCartIndex = state.items.findIndex(
              (ci) => ci.productId === productData.id
            );
      
            if (productInCartIndex >= 0) {
            // this.cart.items[productInCartIndex].qty++;
            state.items[productInCartIndex].qty++;
            } else {
              const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
              };
            //   this.cart.items.push(newItem);
              state.items.push(newItem);
            }
            // this.cart.qty++;
            state.qty++;
            // this.cart.total += productData.price;
            state.total += productData.price;
          },      
          removeProductFromCart(state, payload) {
            const prodId = payload.productId;
            // const productInCartIndex = this.cart.items.findIndex(
            const productInCartIndex = state.items.findIndex(
              (cartItem) => cartItem.productId === prodId
            );
            // const prodData = this.cart.items[productInCartIndex];
            const prodData = state.items[productInCartIndex];
            // this.cart.items.splice(productInCartIndex, 1);
            state.items.splice(productInCartIndex, 1);
            // this.cart.qty -= prodData.qty;
            state.qty -= prodData.qty;
            // this.cart.total -= prodData.price * prodData.qty;
            state.total -= prodData.price * prodData.qty;
          },
    },
    //because mutations we should no do it inside components we will add actions
    actions:{
        addToCart(context, payload){
             //the 3 line below only is added as we only accessing by id no the whole data, option c cartItem, we do it with action as we are using namespace and we need to access data outside this module
             const prodId = payload.id;
             //we accesing the module products
             const products = context.rootGetters['prods/products']
             //we can filter with the id
            const product = products.find(prod => prod.id === prodId);


            context.commit('addProductToCart', product);
            // context.commit('addProductToCart', payload);
        },
        removeFromCart(context, payload){
            context.commit('removeProductFromCart', payload);
        }
    },
    getters:{
        //cartItems
        products(state){
            return state.items;
        },
        //cartTotal
        totalSum(state){
            return state.total;
        },
        //cartQuantity
        quantity(state){
            return state.qty;
        }
    }    
}
