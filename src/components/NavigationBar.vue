<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

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
  <nav
    :class="[
      'bg-[hsla(0,0%,100%,0.6)] container md:mx-auto py-3 px-6 rounded-[20px] flex justify-between items-center w-full fixed top-[50px] left-14 transition-transform duration-300 z-50',
      isHidden ? '-translate-y-full' : 'translate-y-0',
    ]"
  >
    <h1 class="text-3xl text-[hsla(271,47%,26%,1)]">rendezvous</h1>

    <!-- the nav links -->
    <ul class="text-[16px] flex mr-2 space-x-2 text-[hsla(271,47%,26%,1)]">
      <li>Discover</li>
      <li>About Us</li>
      <li>FAQs</li>
      <li>Contact Us</li>
    </ul>

    <!-- the CTA for log in and sign up -->
    <div class="flex space-x-6">
      <button class="btn-transparent">Log in</button>
      <button
        class="text-xs md:text-[16px] bg-[hsla(271,47%,46%,1)] text-white md:py-3 py-2 md:px-6 px-3 rounded-[10px]"
      >
        Sign up
      </button>
    </div>
  </nav>
</template>
