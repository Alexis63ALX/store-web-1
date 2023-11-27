<template>
    <q-card class="product-card">
        <q-card-section>
            <q-img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Imagen de la pelicula"></q-img>
        </q-card-section>
        <q-card-section>
            <div class="text-h6 font-weigth-bold">{{ movie.original_title }}</div>
            <q-card-title>{{ movie.overview }}</q-card-title>
            <div class="text-center">
                <q-btn @click="addToCart" color="primary" icon="favorite" label="Agregar" />
            </div>
        </q-card-section>
    </q-card>
</template>

<style>
.product-card {
    width: 300px;
}

.product-card q-card-section {
    height: 100px;
    overflow: hidden;
}
</style>

<script>
import axios from 'axios'
import { userCartStore } from 'src/stores/cart-store'

export default {
    name: "ProductItem",
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {

            var token = 'cb2c048146ede830b77170de8ca91528be2b501c'
            var url = 'https://api.themoviedb.org/3/account/20738765/favorite?api_key=b459f29f1cec4d9df9a0bb621840cfe5'
            const headers = {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer cb2c048146ede830b77170de8ca91528be2b501c'
            }

            axios.post(url, headers).then(response => {
                //this.productos = response.data
                alert(response.data.status_message)
            }).catch(error => {
                console.log("Error: " + error)
            })
        }

    }
}


</script>