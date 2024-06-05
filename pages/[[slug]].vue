<template>
	<header
		class="header z-20 sticky top-0 flex flex-col md:flex-row pt-[5px] items-center sm:items-baseline justify-center w-full bg-[#f9f3ff]"
	>
		<div class="logo w-[20%] ml-[30px]">
			<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
		</div>
		<div class="w-[80%] flex justify-center md:ml-[-10%]">
			<p
				class="text-[18px] sm:text-[32px] xl:text-[42px] font-extrabold font-serif text-[#7F5E9F]"
				style="font-family: 'Dancing Script'"
			>
				Premium Lifestyle Brand
			</p>
		</div>
	</header>
	<div id="app">
		<Fancybox
			:options="{
				Carousel: {
					infinite: false,
				},
			}"
		>
			<div class="main w-full flex justify-center mt-4">
				<div class="image-flex w-[75%]">
					<template v-for="img in imgs">
						<a data-fancybox="gallery" :href="img" class="image-container">
							<NuxtImg :src="img" />
							<div
								class="card-details px-[10px] h-[50px] absolute bottom-0 w-full bg-gradient-to-b from-[#ffffff00] vid-[#000] to-[#000]"
							>
								<div class="event_name">
									<p class="text-white font-bold">Detail</p>
								</div>
							</div>
						</a>
					</template>
				</div>
			</div>
		</Fancybox>
	</div>
</template>

<script setup>
	import taj_imgs from "~/public/product-launch-taj-chennai/taj_img";
	import fashion_imgs from "~/public/fashion-runway-dubai/fashion-img";
	import products_imgs from "~/public/products/products-img";

	const route = useRoute();
	const imgs = ref(); 
    
	switch (route.params.slug) {
		case "product-launch-taj-chennai":
			imgs.value = taj_imgs;
			break;
		case "fashion-runway-dubai":
			imgs.value = fashion_imgs;
			break;
		case "products":
			imgs.value = products_imgs;
			break;
	}
</script>

<style scoped>
	.image-flex {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
	}
	.image-container {
		@apply drop-shadow-xl;
		flex: 1 1 calc(33.333% - 0px);
		max-width: calc(33.333% - 20px);
		box-sizing: border-box;
		border-radius: 8px;
		overflow: clip;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		min-height: 400px;
		object-fit: cover;
	}

	.image-container img:hover {
		scale: 1.2;
		transition: all 0.8s ease;
	}
	@media (max-width: 820px) {
		.image-container {
			flex: 1 1 100%;
			max-width: 100%;
		}
	}
</style>
