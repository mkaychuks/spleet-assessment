<script setup lang="ts">
import type { Event } from "@/types";
import axios from "axios";
import { onMounted, ref } from "vue";
import TrendingEventCard from "@/components/TrendingEventCard.vue";
import { RouterLink } from "vue-router";
import { IoOutlineMenu } from "@kalimahapps/vue-icons";

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

// call before the components mount
onMounted(() => fetchEvents());
</script>
<template>
  <header>
    <nav
      class="container mx-auto py-3 px-6 rounded-[20px] flex justify-between items-center w-full transition-transform duration-300 z-50"
    >
      <RouterLink to="/" class="text-3xl text-[hsla(271,47%,26%,1)]"
        >rendezvous</RouterLink
      >

      <!-- the nav links -->
      <ul
        class="text-[16px] hidden md:flex mr-2 space-x-2 text-[hsla(271,47%,26%,1)]"
      >
        <li>Discover</li>
        <li>About Us</li>
        <li>FAQs</li>
        <li>Contact Us</li>
      </ul>

      <!-- the CTA for log in and sign up -->
      <div class="hidden space-x-6 md:flex">
        <button class="btn-transparent">Log in</button>
        <button
          class="text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px]"
        >
          Sign up
        </button>
      </div>

      <button><IoOutlineMenu class="block md:hidden text-3xl" /></button>
    </nav>
  </header>
  <section
    class="px-6 md:px-0 md:mx-auto container pt-8 md:pt-16 pb-[50px] md:pb-[100px]"
  >
    <!-- the header -->
    <div class="flex items-center justify-between">
      <h2 class="md:text-[32px] text-[16px]">Trending Events</h2>
    </div>

    <!-- the trending cards -->
    <div class="grid md:grid-cols-3 md:gap-4 gap-3 items-center mt-3 md:mt-6">
      <TrendingEventCard v-for="event in allEvents" :event="event" />
    </div>
  </section>
</template>
