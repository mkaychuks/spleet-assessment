<script setup lang="ts">
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
import TrendingEventCard from "./TrendingEventCard.vue";
</script>
<template>
  <section
    class="px-6 md:px-0 md:mx-auto container pt-8 md:pt-16 pb-[50px] md:pb-[100px]"
  >
    <!-- the header -->
    <div class="flex items-center justify-between">
      <h2 class="md:text-[32px] text-[16px]">Trending Events</h2>
      <p
        class="text-[hsla(271,47%,26%,1)] flex items-center text-xs md:text-[16px] md:gap-3 font-[Gilroy-Regular]"
      >
        View all trending events <span><MdTwoToneArrowOutward /></span>
      </p>
    </div>

    <!-- the trending cards -->
    <div
      class="md:flex-row flex-col flex md:gap-4 gap-3 items-center mt-3 md:mt-6"
    >
      <TrendingEventCard />
      <TrendingEventCard />
      <TrendingEventCard />
    </div>
  </section>
</template>
