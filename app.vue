<template>
	<div class="w-full">
		<div
			class="header sticky top-0 w-full bg-white sm:px-[50px] "
		>
			<div class="logo">
				<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
			</div>
		</div>
		<div class="flex justify-center items-center mt-[50px] gap-5 flex-wrap">
			<template v-for="(image, index) in imgs" :key="index">
				<div class="rounded-[10px] overflow-hidden">
					<NuxtImg
						:src="image"
						width="150"
						height="150"
						@click="clicked(image, index)"
					/>
				</div>
			</template>

			<template v-if="showLarge">
				<div
					class="absolute w-full h-[100%] top-0"
					style="background-color: rgba(255, 255, 255, 1) !important"
				>
					<div
						class="header sticky top-0 w-full sm:px-[50px]   h-[85px]"
					>
						<div class="logo mt-2 ml-2">
							<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
						</div>
					</div>
					<div class="fixed right-2 top-8" @click="handleClose">
						<NuxtImg src="circle-xmark.svg" width="20" height="20" />
					</div>
					<div
						class="flex justify-between items-center sm:mt-[-50px]  sm:px-[50px] sm:pb-[50px]"
					>
						<div
							class="sm:ml-[20px]"
							style="left: 0; z-index: 1 !important"
							@click="handlePrevious"
						>
							<NuxtImg src="angle-double-left.svg" width="20" height="20" />
						</div>
						<div class="flex items-center justify-center">
							<NuxtImg
								:src="currentImg"
								class="w-[80%] h-[600px] object-contain rounded-[20px] overflow-clip"
							/>
						</div>
						<div @click="handleNext">
							<NuxtImg
								src="angle-double-left.svg"
								width="20"
								height="20"
								style="transform: rotate(180deg)"
							/>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
	let currentid = ref(0);
	let currentImg = ref();

	const clicked = (img, id) => {
		currentid.value = id;
		showLarge.value = true;
		currentImg.value = img;
	};

	const handleClose = () => {
		showLarge.value = false;
	};

	const handleNext = () => {
		if (currentid.value < imgs.length - 1) {
			currentImg.value = imgs[++currentid.value];
		}
	};

	const handlePrevious = () => {
		if (currentid.value > 0) {
			currentImg.value = imgs[--currentid.value];
		}
	};

	const showLarge = ref(false);
	const imgs = [
		"/IMG-20240530-WA0019.jpg",
		"/IMG-20240530-WA0020.jpg",
		"/IMG-20240530-WA0021.jpg",
		"/IMG-20240530-WA0022.jpg",
		"/IMG-20240530-WA0023.jpg",
		"/IMG-20240530-WA0025.jpg",
	];
</script>

<style scoped>
	.logo {
		width: calc(50px + (81 / (1024 - 350)) * (100vw - 350px));
		height: calc(40px + (40 / (1024 - 350)) * (100vh - 350px));
		object-fit: contain;
		max-width: 131px;
		max-height: 80px;
		min-width: 50px;
		min-height: 40px;
		transition: width 0.3s ease, height 0.3s ease;
	}

     

</style>
