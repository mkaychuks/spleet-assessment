<script setup lang="ts">
import type { Event } from "@/types";
import axios from "axios";
import { onMounted, ref } from "vue";
import TrendingEventCard from "@/components/TrendingEventCard.vue";
import { RouterLink } from "vue-router";
import { IoOutlineMenu, IoOutlineClose } from "@kalimahapps/vue-icons";

const allEvents = ref<Event[]>([]); // the ref for storing events
const openMenu = ref<boolean>(false);

const toggleMenu = () => (openMenu.value = !openMenu.value);

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
    <nav>
      <div
        class="container mx-auto py-3 px-6 rounded-[20px] flex justify-between items-center w-full transition-transform duration-300 z-50"
      >
        <!-- the logo section -->
        <RouterLink to="/" class="text-3xl text-[hsla(271,47%,26%,1)]"
          >rendezvous</RouterLink
        >
        <!-- the menu section -->
        <div class="hidden md:block">
          <ul
            class="text-[16px] flex mr-2 space-x-8 text-[hsla(271,47%,26%,1)]"
          >
            <li>Discover</li>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <!-- icons section -->
        <div class="space-x-6 hidden md:flex">
          <button class="btn-transparent">Log in</button>
          <button
            class="text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px]"
          >
            Sign up
          </button>
        </div>
        <!-- mobile hamburger -->
        <div class="md:hidden" @click="toggleMenu">
          <IoOutlineMenu v-if="!openMenu" class="text-3xl" />
          <IoOutlineClose v-else class="text-3xl" />
        </div>
      </div>
    </nav>
    <!-- the mobile menu -->
    <div
      :class="[
        'absolute top-16 left-0 w-full z-20 transition-transform',
        openMenu ? 'block' : 'hidden',
      ]"
    >
      <div class="bg-white py-4">
        <ul class="text-[16px] mr-2 space-y-3 text-[hsla(271,47%,26%,1)] px-6">
          <li>Discover</li>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
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
