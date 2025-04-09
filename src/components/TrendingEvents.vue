<script setup lang="ts">
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
import TrendingEventCard from "./TrendingEventCard.vue";

import type { Event } from "@/types";
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { RouterLink } from "vue-router";

const allEvents = ref<Event[]>([]); // the ref for storing events

//fetch events from api
const fetchEvents = async () => {
  await axios
    .get("https://rendezvous-events.onrender.com/events")
    .then((res) => {
      allEvents.value = res?.data?.data?.allEvents as Event[];
    })
    .catch((err) => console.log(err));
};

// select the top 3 events from the list of all events
const topThreeEvents = computed(() => {
  return allEvents.value.splice(0, 3) as Event[];
});

// call before the components mount
onMounted(() => fetchEvents());
</script>
<template>
  <section
    class="px-6 md:px-0 md:mx-auto container pt-8 md:pt-16 pb-[50px] md:pb-[100px]"
  >
    <!-- the header -->
    <div class="flex items-center justify-between">
      <h2 class="md:text-[32px] text-[16px]">Trending Events</h2>
      <RouterLink
        to="/events"
        class="text-[hsla(271,47%,26%,1)] flex items-center text-xs md:text-[16px] md:gap-3 font-[Gilroy-Regular]"
      >
        View all trending events <span><MdTwoToneArrowOutward /></span>
      </RouterLink>
    </div>

    <!-- the trending cards -->
    <div
      class="md:flex-row flex-col flex md:gap-4 gap-3 items-center mt-3 md:mt-6"
    >
      <TrendingEventCard v-for="trending in topThreeEvents" :event="trending" />
    </div>
  </section>
</template>
