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
    <div class="flex justify-between items-center mx-auto container pt-[428px]">
      <!--  the text of the hero section -->
      <div class="max-w-[531px]">
        <h1 class="text-white text-[32px] tracking-[0%]">
          Ready to Rock? Discover the Hottest Events Here - Your Calendar's New
          Best Friend!
        </h1>
      </div>

      <!-- the button and category -->
      <div
        class="max-w-[660px] rounded-[20px] bg-white px-6 h-[100px] flex items-center justify-between flex-2"
      >
        <!-- the input -->
        <div class="flex items-center gap-4 max-w-[280px]">
          <MdSearch class="text-[16px]" />
          <input
            type="text"
            placeholder="Search for an event"
            class="text-[16px] outline-none border-none font-[Gilroy-Regular]"
          />
        </div>
        <!-- the divider -->
        <div class="bg-[hsla(0,0%,88%,1)] h-[51px] w-0.5"></div>
        <!-- the selector -->
        <div class="relative max-w-[160px] w-full">
          <div
            class="flex justify-between items-center"
            @click="toggleVisibility"
          >
            <p
              class="text-[16px] text-[hsla(0,0%,31%,1)] font-[Gilroy-Regular]"
            >
              Category
            </p>
            <MdArrowDropDown class="text-[16px]" />
          </div>
          <!-- the dropdown -->
          <div
            v-if="isOpen"
            class="absolute bg-white px-4 py-2 rounded-[12px] shadow-md mt-2 border-gray-200 w-full"
          >
            <ul class="category">
              <li v-for="option in options">{{ option }}</li>
            </ul>
          </div>
        </div>
        <!-- the button -->
        <button class="btn-primary">Search</button>
      </div>
    </div>
  </section>
</template>
