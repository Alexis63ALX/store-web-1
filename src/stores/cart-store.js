import {defineStore} from "pinia";

export const userCartStore = defineStore("cart",{
    state: () => ({
        cartItems: JSON.parse(localStorage.getItem("cart")) || []
    }),
    actions:{
        addToCart(product){
            const cartAllItems = this.cartItems;
            const existingProductIndex = cartAllItems.findIndex(
                (item) => item.id == product.id
            )

            if(existingProductIndex>=0)
                cartAllItems[existingProductIndex].quantity++;
            else
                cartAllItems.push({...product, quantity: 1})
            
            localStorage.setItem("cart",JSON.stringify(cartAllItems))
            this.cartItems = cartAllItems
        },
        removeToCart(productId){
            const cartAllItems = this.cartItems;

            const existingProductIndex = cartAllItems.findIndex(
                (item) => item.id == productId
            )

            if(existingProductIndex>=0)
                cartAllItems.splice(existingProductIndex,1)
      
            localStorage.setItem("cart"), JSON.stringify(cartAllItems)
            this.cartItems = cartAllItems
        },
        updateQuantity(productId, newQuantity){
            const cartAllItems = this.cartItems;

            const existingProductIndex = cartAllItems.findIndex(
                (item) => item.id == productId
            )
            if(existingProductIndex>=0)
                cartAllItems[existingProductIndex].quantity = newQuantity;

            localStorage.setItem("cart", JSON.stringify(cartAllItems))
            this.cartItems = cartAllItems
        },
        clearCart(){
            localStorage.removeItem("cart")
            this.cartItems = []
        },
        getCart(){
            return this.cartItems
        }
    },
    getters: {
        totalCountItems(){
            return this.cartItems ? 
                this.cartItems.reduce((total, item) => total+item.quantity, 0) : 0
        }

    }


    
})