<template>
	<Card>
		<template #title>{{ product.title }}</template>
		<template #content>
			<p class="m-0">
				{{ product.description }}
			</p>
			<p>
				₹ {{ product.price }}
			</p>
		</template>
	</Card>

	{{ product }}

	<Button label="Check" icon="pi pi-check" />

</template>
<script setup>

import Card from 'primevue/card';
import Button from 'primevue/button';

const { id } = useRoute().params
const { data: product } = await useFetch('https://fakestoreapi.com/products/' + id)
if (!product.value) {
	throw createError({ statusCode: 404 })
}
</script>