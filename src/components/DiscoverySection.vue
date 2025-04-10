<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="container md:mx-auto px-6 md:px-0 md:py-[127px] py-[63px]">
    <div class="grid gap-3 md:gap-6 md:grid-cols-3">
      <!-- 1 -->
      <div class="w-full h-32 md:h-60 flex flex-col justify-center items-start">
        <p class="text-[16px] md:text-[32px] font-[Gilroy-Medium]">
          Discover a World of Events Tailored Just for You.
        </p>
        <RouterLink
          to="/events"
          class="mt-3 md:mt-6 text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px]"
        >
          View all events
        </RouterLink>
      </div>
      <!-- 2 -->
      <div
        class="bg-[url(../assets/online.png)] bg-no-repeat bg-cover rounded w-full h-32 md:h-60 relative"
      >
        <div
          class="bg-black/70 w-full h-32 md:h-60 rounded absolute inset-0"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-white">Online Events</p>
        </div>
      </div>
      <!-- 3 -->
      <div
        class="bg-[url(../assets/physical.png)] bg-no-repeat bg-cover rounded w-full h-32 md:h-60 relative"
      >
        <div
          class="bg-black/70 w-full h-32 md:h-60 rounded absolute inset-0"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-white">Physical Events</p>
        </div>
      </div>
      <!-- 4 -->
      <div
        class="bg-[url(../assets/hybrid.png)] bg-no-repeat bg-cover rounded w-full h-32 md:h-60 md:col-start-2 relative"
      >
        <div
          class="bg-black/70 w-full h-full md:h-60 rounded absolute inset-0"
        ></div>
        <div class="absolute inset-0 flex items-center justify-center">
          <p class="text-white">Hybrid Events</p>
        </div>
      </div>
    </div>
  </section>
</template>
