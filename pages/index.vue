<template>
	<!-- <div class="w-full">
		 <div
			class="header sticky top-0 w-full bg-white sm:px-[50px] "
		>
			<div class="logo">
				<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
			</div>
		</div> 
		<div class="flex justify-center items-center mt-[50px] gap-5 flex-wrap">
			<template v-for="(image, index) in imgs" :key="index">
				<div class="rounded-[10px] overflow-hidden img-list "  >
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
						class="flex justify-between items-center sm:mt-[-20px]  sm:px-[50px] sm:pb-[50px]"
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
								class="w-full h-[550px] object-cover rounded-[20px] overflow-clip"
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
	</div> -->

	<div class="w-full h-full flex flex-col items-center bg-[#f9f3ff]">
		<!-- header section -->
		<header
			class="header sticky top-0 flex pt-[5px] flex-col w-full items-center bg-[#f9f3ff]"
		>
			<div>
				<p
					class="text-[18px] sm:text-[32px] xl:text-[28px] font-extrabold font-serif text-[#7F5E9F]"
				>
					Moments Captured in Time
				</p>
			</div>
			<div class="logo">
				<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
			</div>
		</header>

		<!-- main content -->
		<main
			class="mt-[40px] flex flex-col sm:flex-row sm:flex-wrap gap-4 w-[90%] xl:w-[70%]"
		>
			<template v-for="(image, index) in imgs" :key="index">
				<NuxtLink :to="image.link">
					<div
						class="card relative w-[90%] sm:w-[200px] h-[350px] sm:h-[200px] rounded-2xl overflow-clip"
					>
						<div class="event-img w-full object-contain">
							<NuxtImg
								:src="image.img"
								@click="clicked(image, index)"
								style="width: inherit; height: inherit"
								class="object-fit"
							/>
						</div>
						<div
							class="card-details px-[10px] h-[50px] absolute bottom-0 w-full bg-gradient-to-b from-[#ffffff00] vid-[#000] to-[#000]"
						>
							<div class="event_name">
								<p class="text-white font-bold">{{ image.event_name }}</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</template>
		</main>
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
	// const imgs = [

	// 	"/IMG-20240530-WA0019.jpg",
	// 	"/IMG-20240530-WA0020.jpg",
	// 	"/IMG-20240530-WA0021.jpg",
	// 	"/IMG-20240530-WA0022.jpg",
	// 	"/IMG-20240530-WA0023.jpg",
	// 	"/IMG-20240530-WA0025.jpg",
	// ];

	const imgs = [
		{
			img: "/IMG-20240530-WA0019.jpg",
			event_name: "Fashion Runway-Dubai",
			link: "/dubai-fashion-runway",
		},
		{
			img: "/IMG-20240530-WA0020.jpg",
			event_name: "Product Launch-Taj Chennai ",
			link: "/product-launch-taj-chennai",
		},
		{
			img: "/IMG-20240530-WA0021.jpg",
			event_name: "Dubai International ",
			link: "/dubai-international",
		},
		{
			img: "/IMG-20240530-WA0025.jpg",
			event_name: "Dubai International Fashion ",
			link: "/dubai-international-fashion",
		},
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

	.img-list:hover {
		transform: rotate(2deg);
		transition: 0.3s all ease-in-out;
	}

	.card:hover {
		transform: rotate(2deg);
	}

	img:hover {
		scale: 1.5;
		transition: all 0.5s ease;
	}
</style>
