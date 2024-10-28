<template>
	<div>
		<header class="shadow-sm">
			<nav class="flex gap-2">
				<div>
					<NuxtLink to="/" rel="noopener">
						<div class="flex">
							<Button label="Home" icon="pi pi-home" size="small"></Button>
						</div>
					</NuxtLink>
				</div>
				<div>
					<NuxtLink to="/about" rel="noopener">
						<Button label="About" icon="pi pi-info-circle" size="small"></Button>
					</NuxtLink>
				</div>
				<div>
					<NuxtLink to="/products" rel="noopener">
						<Button label="Products" icon="pi pi-shopping-cart" size="small"></Button>
					</NuxtLink>
				</div>
			</nav>
		</header>
		<div>
			<div class="container mx-auto mt-5">
				<slot />
			</div>
		</div>
	</div>
</template>
<script setup>
</script>