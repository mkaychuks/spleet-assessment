<script setup lang="ts">
import FooterSection from "@/components/FooterSection.vue";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoOutlineMail,
  MdOutlinedLocationOn,
  MdOutlinedPerson,
  MdSchedule,
  MdSharpCalendarToday,
  IoOutlineMenu,
  IoOutlineClose,
} from "@kalimahapps/vue-icons";

import type { Event } from "@/types";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { convertTo12Hour, formatDate } from "@/utils/utils";

const event = ref<Event>(); // the ref for storing events
const route = useRoute();
const isLoading = ref<boolean>(false);

//fetch event detail from api
const fetchEventDetail = async () => {
  isLoading.value = true;
  await axios
    .get(`https://rendezvous-events.onrender.com/events/${route.params.id}`)
    .then((res) => {
      console.log(res.data);
      event.value = res?.data?.data?.event as Event;
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
      isLoading.value = false;
    });
};

const currentTime = ref<string>("");
const currentDate = ref<string>("");
const openMenu = ref<boolean>(false);

const toggleMenu = () => (openMenu.value = !openMenu.value);

// call before the components mount
onMounted(() => {
  // fetch the data from the api and updated the formatted time
  fetchEventDetail().then(() => {
    currentTime.value = convertTo12Hour(event.value?.time!);
    currentDate.value = formatDate(event.value?.date!);
  });
});
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

  <!-- the main content of the page -->
  <!-- the loading screen -->
  <section
    v-if="isLoading"
    class="container px-6 md:px-0 md:mx-auto pt-4 md:pt-6"
  >
    <div class="h-screen flex justify-center items-center w-full">
      <h1 class="text-3xl text-[hsla(271,47%,26%,1)]">rendezvous</h1>
    </div>
  </section>

  <div v-else>
    <section class="container px-6 md:px-0 md:mx-auto pt-4 md:pt-6">
      <!-- the image of the page -->
      <div class="w-full md:max-h-[480px] md:h-[480px] bg-red-400 rounded">
        <img
          :src="event?.imageUrl"
          :alt="event?.title + 'picture'"
          class="w-full md:h-[480px] md:max-h-[480px] rounded"
        />
      </div>

      <!-- the event details -->
      <div class="grid md:grid-cols-8 mt-12 gap-8">
        <!-- the left side -->
        <div
          class="md:col-span-5 space-y-8 flex-col items-start justify-center"
        >
          <!-- the title of the event -->
          <div>
            <h3 class="text-2xl">{{ event?.title }}</h3>
            <!-- the date and time -->
            <div class="flex items-center gap-6 mb-2">
              <p
                class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2"
              >
                <span
                  ><MdSharpCalendarToday
                    class="text-[hsla(271,70%,60%,1)] text-[24px]"
                /></span>
                {{ currentDate }}
              </p>
              <p
                class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2 mb-2 pt-2"
              >
                <span
                  ><MdSchedule class="text-[hsla(271,70%,60%,1)] text-[24px]"
                /></span>
                {{ currentTime }}
              </p>
            </div>
            <!-- the location -->
            <p
              class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2 mb-2"
            >
              <span
                ><MdOutlinedLocationOn
                  class="text-[hsla(271,70%,60%,1)] text-[24px]"
              /></span>
              {{ event?.address }}, {{ event?.city }}, {{ event?.country }}
            </p>
            <p
              class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2"
            >
              <span
                ><MdOutlinedPerson
                  class="text-[hsla(271,70%,60%,1)] text-[24px]" /></span
              >{{ event?.organizer.name }}
            </p>
          </div>

          <!-- the event details -->
          <div>
            <p class="text-[16px] mb-5">Event description</p>
            <p class="font-[Gilroy-Regular]">
              {{ event?.description }}
            </p>
          </div>

          <!-- the tickets pricing -->
          <div>
            <p class="text-[16px] mb-5">Tickets Pricing</p>

            <div class="w-[224px] flex justify-between items-center">
              <div>
                <p>Single</p>
                <p v-if="event?.price === 0" class="text-[hsla(271,70%,60%,1)]">
                  FREE
                </p>
                <p v-else class="text-[hsla(271,70%,60%,1)]">
                  NGN {{ event?.price }}
                </p>
              </div>
              <div>
                <p>Pair</p>
                <p v-if="event?.price === 0" class="text-[hsla(271,70%,60%,1)]">
                  FREE
                </p>
                <p v-else class="text-[hsla(271,70%,60%,1)]">
                  NGN {{ event?.price }}
                </p>
              </div>
            </div>
          </div>

          <!-- the button -->
          <button
            class="mt-3 md:mt-6 text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px] md:mb-12 mb-8"
          >
            Buy now
          </button>
        </div>
        <!-- the right side -->
        <div class="md:col-span-3 flex-col space-y-8">
          <!-- organizers -->
          <div>
            <p class="text-[16px] mb-5">Contact Organizers</p>
            <div class="flex justify-between w-[152px]">
              <div
                class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded cursor-pointer"
              >
                <a :href="`mailto:${event?.organizer.email}`">
                  <IoOutlineMail class="text-white" />
                </a>
              </div>
              <div
                class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded cursor-pointer"
              >
                <a :href="event?.organizer.twitterUrl" target="_blank">
                  <IoLogoTwitter class="text-white" />
                </a>
              </div>
              <div
                class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded cursor-pointer"
              >
                <a :href="event?.organizer.instagram" target="_blank">
                  <IoLogoInstagram class="text-white" />
                </a>
              </div>
            </div>
          </div>

          <!-- directions and map -->
          <div class="mb-10">
            <p class="text-[16px] mb-5">Directions</p>
            <img src="../assets/map.png" alt="map" />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <FooterSection />
    </footer>
  </div>
</template>
