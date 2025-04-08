<script setup lang="ts">
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
</script>
<template>
  <div
    class="rounded w-[421px] max-w-[421px] h-[488px] max-h-[488px] shadow-md border-[0.5px] border-gray-300"
  >
    <!-- the image div -->
    <div class="h-60 w-full bg-red-500 rounded-t mb-6"></div>
    <!-- the details of the event -->
    <div class="px-6 flex flex-col items-start">
      <p class="font-[Gilroy-Bold] text-[16px] mb-1">ISWIS Live show</p>
      <p class="font-[Gilroy-Medium]">Sun, Oct 3rd</p>
      <p class="font-[Gilroy-Regular] mt-4 leading-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p
        class="text-[hsla(271,47%,26%,1)] flex items-center gap-2 mt-4 mb-8 font-[Gilroy-Regular]"
      >
        View details <span><MdTwoToneArrowOutward /></span>
      </p>
    </div>
  </div>
</template>
