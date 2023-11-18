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
    props: {
        categoryIdSelected: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            productos: [],
            categoryId: 0
        }
    },
    mounted() {
        this.getProducts(0)
    },
    methods: {
        getProducts(idCategoria) {
            this.categoryId = idCategoria ?? 0;
            var token = JSON.parse(localStorage.getItem("userData")).token
            var url = 'http://localhost:5081/api/Product/GetAllByCategory/' + this.categoryId
            var cabeceraToken = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }

            axios.get(url, cabeceraToken).then(response => {
                this.productos = response.data
            }).catch(error => {
                console.log("Error: " + error)
            })
        }
    }


}

</script>