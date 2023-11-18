<template>
    <h6>Filtros</h6>
    <div class="filtro-categoria">
        <label>Categoría</label>
        <q-select v-model="selectedCategory" filled :options="categories" option-label="description" option-value="id"
            label="filled" />
    </div>
    <div class="filtro-precio">
        <label>Rango de precios</label>
        <q-input id="precio-minimo" v-model.number="minimo" label="Mínimo" type="number" filled class="q-mb-xs" />
        <q-input id="precio-maximo" v-model.number="maximo" label="Maximo" type="number" filled />
    </div>
</template>

<style>
#precio-minimo {
    width: 200px
}
</style>

<script>

import axios from 'axios';
export default {
    name: "ProductFilter",
    data() {
        return {
            //categories: ["Celulares", "Impresoras", "Laptop"],
            categories: [],
            selectedCategory: "Celulares",
            minimo: 1,
            maximo: 10000,
            categoryName: []
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        getCategories() {
            var url = "http://localhost:5081/api/Category";
            axios.get(url)
                .then(response => {
                    console.log(response.data)
                    this.categories = response.data
                    //this.categoryName = response.data.map(category => category.description)
                }).catch(error => {
                    console.log(error)
                })

        }
    }


}

</script>