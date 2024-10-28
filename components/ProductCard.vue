<template>
	<Card>
		<template #header class="text-center">
			<img :src="`${product.image}`" alt="Image" class="size-64">
		</template>
		<template #title class="truncate">{{ product.title }}</template>
		<template #subtitle>{{ product.rating.rate }}⭐ ({{ product.rating.count }})</template>
		<template #content class="truncate">
			{{ product.description }}
		</template>
		<template #footer>
			<div class="float-end">
				<NuxtLink :to="`/products/${product.id}`" rel="noopener">
					<Button label="View"></Button>
				</NuxtLink>
			</div>
		</template>
	</Card>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>