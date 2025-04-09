<script setup lang="ts">
import { MdSearch, MdArrowDropDown } from "@kalimahapps/vue-icons";
import { ref } from "vue";

const options = [
  "All",
  "Comedy",
  "Religious",
  "Tech",
  "Health",
  "Fitness",
  "Sports",
  "Education",
];

// toggle dropdown
const isOpen = ref<boolean>(false);
const toggleVisibility = () => (isOpen.value = !isOpen.value);
</script>
<template>
  <section
    class="bg-[url(../assets/hero-image.png)] w-full bg-no-repeat h-full bg-cover"
  >
    <div
      class="flex flex-col md:flex-row justify-between items-center md:mx-auto px-6 md:px-0 container pt-[300px] md:pt-[428px] pb-10"
    >
      <!--  the text of the hero section -->
      <div class="md:max-w-[531px] max-w-full">
        <h1 class="text-white md:text-[32px] text-[18px] md:tracking-[0%]">
          Ready to Rock? Discover the Hottest Events Here - Your Calendar's New
          Best Friend!
        </h1>
      </div>

      <!-- the button and category -->
      <div
        class="md:max-w-[660px] w-full rounded md:rounded-[20px] bg-white px-3 md:px-6 h-[50px] md:h-[100px] flex items-center justify-between md:flex-2"
      >
        <!-- the input -->
        <div
          class="flex items-center md:gap-4 gap-2 md:max-w-[280px] max-w-[140px]"
        >
          <MdSearch class="md:text-[16px] text-xs" />
          <input
            type="text"
            placeholder="Search for an event"
            class="text-xs md:text-[16px] outline-none border-none font-[Gilroy-Regular]"
          />
        </div>
        <!-- the divider -->
        <div class="bg-[hsla(0,0%,88%,1)] md:h-[51px] h-[25px] w-0.5"></div>
        <!-- the selector -->
        <div class="relative md:max-w-[160px] max-w-[80px] w-full">
          <div
            class="flex justify-between items-center"
            @click="toggleVisibility"
          >
            <p
              class="text-xs md:text-[16px] text-[hsla(0,0%,31%,1)] font-[Gilroy-Regular]"
            >
              Category
            </p>
            <MdArrowDropDown class="md:text-[16px] text-xs" />
          </div>
          <!-- the dropdown -->
          <div
            v-if="isOpen"
            class="absolute bg-white px-4 py-2 rounded-[12px] shadow-md mt-2 border-gray-200 w-full"
          >
            <ul class="category text-xs">
              <li v-for="option in options">{{ option }}</li>
            </ul>
          </div>
        </div>
        <!-- the button -->
        <button
          class="text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px]"
        >
          Search
        </button>
      </div>
    </div>
  </section>
</template>
