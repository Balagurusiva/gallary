<template>
	 

	<div class="w-full h-full flex flex-col items-center bg-[#f9f3ff]">
		<!-- header section -->
		<header class="header z-20  sticky top-0 flex flex-col md:flex-row pt-[5px]  items-center sm:items-baseline justify-center   w-full  bg-[#f9f3ff]" >
            <div class="logo w-[20%] ml-[30px]">
				<NuxtImg src="/Kx1rLCnLKU4d4cD7viBNCJUbSbQpkU3HIpEeP4U0.png" />
			</div>
			<div class="w-[80%] flex justify-center md:ml-[-10%]">
				<p class="text-[18px] sm:text-[32px] xl:text-[32px] font-extrabold font-serif text-[#7F5E9F]" >
					Moments Captured in Time
				</p>
			</div>
			 
		</header>

		<!-- main content -->
		<main
			class="mt-[40px] flex flex-col sm:flex-row sm:flex-wrap gap-4 w-[90%] xl:w-[75%]"
		>
			<template v-for="(image, index) in imgs" :key="index">
				<NuxtLink :to="image.link" class="flex justify-center">
					<div
						class="card relative drop-shadow-xl w-[90%] sm:w-[225px] h-[350px] sm:h-[250px] rounded-2xl overflow-clip"
					>
						<div class="event-img w-full object-cover">
							<NuxtImg
								:src="image.img"
								@click="clicked(image, index)"
								style="width: inherit; height: inherit"
								class="object-contain"
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
 
	const imgs = [
		{
			img: "/IMG-20240530-WA0019.jpg",
			event_name: "Fashion Runway-Dubai",
			link: "/dubai-fashion-runway",
		},
		{
			img: "/taj-event.jpg",
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
	 
	.img-list:hover {
		transform: rotate(2deg);
		transition: 0.3s all ease-in-out;
	}

	.card:hover {
		transform: rotate(2deg);
	}

	.event-img > img:hover {
		scale: 1.2;
		transition: all 0.5s ease;
	}
</style>
