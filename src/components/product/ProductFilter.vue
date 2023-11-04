<template>
    <h6>Filtros</h6>
    <div class="filtro-categoria">
        <label>Categoría</label>
        <q-select v-model="selectedCategory" filled :options="categories" option-value="value" label="filled" />
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

export default {
    name: "ProductFilter",
    data() {
        return {
            categories: ["Celulares", "Impresoras", "Laptop"],
            selectedCategory: "Celulares",
            minimo: 1,
            maximo: 10000
        }
    }
}

</script>