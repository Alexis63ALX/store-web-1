<template>
    <div class="cart-page">
        <ul class="cart-list">
            <li class="cart-item" v-for="(product, index) in localProducts" :key="index">
                <!-- Detalle -->
                <div class="cart-item-details">
                    <img :src="product.imageUrl" class="cart-item-image">
                    <h6 class="cart-item-name">{{ product.name }} {{ product.image }}</h6>
                    <p class="cart-item-description">{{ product.description }}</p>
                </div>
                <!-- Cantidad -->
                <div class="cart-item-quantity">
                    <button class="cart-item-quantity-button" @click="decrement(product)">-</button>
                    <input type="text" class="cart-item-quantity-input" v-model="product.quantity" />
                    <button class="cart-item-quantity-button" @click="increment(product)">+</button>
                </div>
                <!-- Precio -->
                <div class="cart-item-price">
                    <span> {{ product.price }}</span>
                </div>
                <!-- Boton Remove -->
                <div class="cart-item-delete">
                    <button class="cart-item-delete-btn">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.cart-page {
    padding: 20px;
}

.cart-list {
    max-width: 600px;
    margin: 0 auto;
    list-style: none;
    padding: 0;
}

.cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
}

.cart-item-details {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.cart-item-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 10px;
}

.cart-item-name {
    font-weight: bold;
    margin: 0;
}

.cart-item-description {
    font-style: italic;
    margin: 0;
}

.cart-item-quantity {
    display: flex;
    align-items: center;
}

.cart-item-quantity-btn {
    font-size: 18px;
    background-color: #ddd;
    border: none;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
}

.cart-item-quantity-input {
    width: 50px;
    text-align: center;
}

.cart-item-price {
    font-weight: bold;
}

.cart-item-delete {
    margin-left: 10px;
}

.cart-item-delete-btn {
    background-color: #ff5252;
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
}
</style>

<script>
import { userCartStore } from 'src/stores/cart-store';
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: "CartPage",
    setup() {
        const cartStore = userCartStore()
        const localProducts = reactive(cartStore.getCart())

        const updateQuantity = (productId, newQuantity) => {
            cartStore.updateQuantity(productId, newQuantity)
        }

        const increment = (product) => {
            const newQuantity = product.quantity + 1
            console.log("Se actualizará de: " + product.quantity + " a " + newQuantity)
            product.quantity = newQuantity

            updateQuantity(product.id, newQuantity)
        }

        const decrement = (product) => {
            const newQuantity = product.quantity - 1
            product.quantity = newQuantity
            updateQuantity(product.id, newQuantity)
        }


        return {
            localProducts,
            increment,
            decrement

        }

    }
})

</script>