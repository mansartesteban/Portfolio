<template>
    <!-- <div class="absolute top-0 left-0 opacity-100 h-screen -m-8"> -->
    <!-- <img class="h-full object-cover " :src="Back" alt=""> -->
    <!-- <img class="h-full object-cover " :src="Illu" alt="" style="box-shadow: inset 0px 0px 40px 40px #DBA632;"> -->
    <!-- </div> -->
    <div class="snap-proximity scroll-y-auto">
        <div class="snap-center relative p-1 h-screen mb-16  rounded-xl">
            <div class="p-12">
                <img :src="Gtp">
            </div>
            <div class="absolute top-0 left-0 opacity-10 h-screen -m-8">
                <!-- <img class="h-full object-cover " :src="Back" alt=""> -->
            </div>
            <!-- https://planete-online.fr/ -->
            <div class="p-12 text-justify flex flex-col gap-8">
                <h2 class="text-2xl font-bold">GTP-Conseil</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla labore placeat dolorum ipsa
                    sint
                    ratione reprehenderit saepe iste quos odio itaque accusamus molestiae quas, harum velit
                    necessitatibus
                    voluptates! Reprehenderit.</p>
            </div>
        </div>
        <div class="snap-center relative p-1 h-screen">
            <div class="p-12">
                <img :src="Gtp">
            </div>

            <!-- https://planete-online.fr/ -->
            <div class="p-12 text-justify flex flex-col gap-8">
                <h2 class="text-2xl font-bold">GTP-Conseil</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nulla labore placeat dolorum ipsa
                    sint
                    ratione reprehenderit saepe iste quos odio itaque accusamus molestiae quas, harum velit
                    necessitatibus
                    voluptates! Reprehenderit.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Gtp from "@/assets/images/career/Gtp.svg"
import Back from "@/assets/images/career/back.jpg"
import Illu from "@/assets/images/career/illustration.webp"
</script>