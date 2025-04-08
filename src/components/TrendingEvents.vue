<script setup lang="ts">
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
import TrendingEventCard from "./TrendingEventCard.vue";
</script>
<template>
  <section class="mx-auto container pt-16 pb-[100px]">
    <!-- the header -->
    <div class="flex items-center justify-between">
      <h2 class="text-[32px]">Trending Events</h2>
      <p
        class="text-[hsla(271,47%,26%,1)] flex items-center gap-3 font-[Gilroy-Regular]"
      >
        View all trending events <span><MdTwoToneArrowOutward /></span>
      </p>
    </div>

    <!-- the trending cards -->
    <div class="flex items-center justify-between">
      <TrendingEventCard />
      <TrendingEventCard />
      <TrendingEventCard />
    </div>
  </section>
</template>
