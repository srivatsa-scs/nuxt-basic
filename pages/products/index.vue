<template>
	<div class="grid grid-cols-4 gap-4">
		<div v-for="product in products">
			<ProductCard :product="product" />
		</div>
	</div>
</template>
<script setup>


const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>