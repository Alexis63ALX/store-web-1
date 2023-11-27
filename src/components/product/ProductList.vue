<template>
    <h5>Listado de Productos</h5>
    <div class="product-list">
        <div class="product-grid">
            <div class="product-item" v-for="movie in movies" :key="movie.id">
                <ProductItem :movie="movie" />
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
            movies: [],
            categoryId: 0
        }
    },
    mounted() {
        this.getProducts(0)
    },
    methods: {
        getProducts(idCategoria) {

            var token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDU5ZjI5ZjFjZWM0ZDlkZjlhMGJiNjIxODQwY2ZlNSIsInN1YiI6IjY1NWZhYjM1YTZjMTA0MDEzODI4OTQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9gD2y5gJ8Yc7qp2ipzedkjBiZDwnNwkxQMZkMmW_Ddc'
            var url = 'https://api.themoviedb.org/3/discover/movie?api_key=b459f29f1cec4d9df9a0bb621840cfe5'
            var cabeceraToken = {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }

            axios.get(url, cabeceraToken).then(response => {
                //this.productos = response.data
                this.movies = response.data.results
                console.log(this.movies)
            }).catch(error => {
                console.log("Error: " + error)
            })
        }
    }


}

</script>