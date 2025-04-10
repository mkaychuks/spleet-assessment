<script setup lang="ts">
import { IoOutlineMenu, IoOutlineClose } from "@kalimahapps/vue-icons";
import { onBeforeUnmount, onMounted, ref } from "vue";

const openMenu = ref<boolean>(false);
const toggleMenu = () => (openMenu.value = !openMenu.value);

const isHidden = ref<boolean>(false);
let lastScroll = 0;
const handleScroll = () => {
  const currentScroll = window.scrollY;
  isHidden.value = currentScroll > lastScroll && currentScroll > 50;
  lastScroll = currentScroll;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>
<template>
  <header :class="[isHidden ? 'hidden' : 'block']">
    <nav>
      <div
        class="bg-[hsla(0,0%,100%,0.6)] fixed md:left-14 left-0 container mx-auto py-3 px-6 md:rounded-[20px] flex justify-between items-center w-full transition-transform duration-300 z-50"
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
        'absolute top-[60px] left-0 w-full z-20 transition-transform',
        openMenu ? 'block' : 'hidden',
      ]"
    >
      <div class="bg-[hsla(0,0%,100%,0.6)] py-4">
        <ul class="text-[16px] mr-2 space-y-3 text-[hsla(271,47%,26%,1)] px-6">
          <li>Discover</li>
          <li>About Us</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </header>
</template>
