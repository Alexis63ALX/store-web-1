<template>
    <h5>Listado de Productos</h5>
    <div class="product-list">
        <div class="product-grid">
            <div class="product-item" v-for="producto in productos" :key="producto.id">
                <h6>{{ producto.description }}</h6>
            </div>
        </div>
    </div>
</template>

<style>
.product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
</style>

<script>
import axios from 'axios'
export default {
    name: "ProductList",
    data() {
        return {
            productos: [
                {
                    "id": 1,
                    "description": "Samsung Galaxy S21",
                    "stock": 10,
                    "price": 799.99,
                    "discount": 0,
                    "category": {
                        "id": 1,
                        "description": "Celulares"
                    }
                },
                {
                    "id": 2,
                    "description": "iPhone 12",
                    "stock": 5,
                    "price": 899.99,
                    "discount": 0,
                    "category": {
                        "id": 1,
                        "description": "Celulares"
                    }
                }
            ]
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