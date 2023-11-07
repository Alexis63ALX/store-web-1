<template>
    <h5>Listado de Productos</h5>
    <div class="product-list">
        <div class="product-grid">
            <div class="product-item" v-for="producto in productos" :key="producto.id">
                <ProductItem :product="producto" />
            </div>
        </div>
    </div>
</template>

<style>
.product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
</style>

<script>
import axios from 'axios'
import ProductItem from 'components/product/ProductItem.vue'
export default {
    name: "ProductList",
    components: {
        ProductItem
    },
    data() {
        return {
            productos: []
        }
    },
    mounted() {
        this.getProducts()
    },
    methods: {
        getProducts() {
            var url = 'http://localhost:5081/api/Product'
            axios.get(url).then(response => {
                this.productos = response.data
            }).catch(error => {
                console.log("Error: " + error)
            })
        }
    }


}

</script>