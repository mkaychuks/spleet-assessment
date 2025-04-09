<script setup lang="ts">
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
</script>
<template>
  <div
    class="rounded md:w-[421px] w-full md:max-w-[421px] max-w-full md:h-[488px] h-[380px] md:max-h-[488px] max-h-[380px] shadow-md border-[0.5px] border-gray-300"
  >
    <!-- the image div -->
    <div class="md:h-60 h-40 w-full bg-red-500 rounded-t md:mb-6 mb-3"></div>
    <!-- the details of the event -->
    <div class="px-6 flex flex-col items-start">
      <p class="font-[Gilroy-Bold] md:text-[16px] text-sm mb-1">
        ISWIS Live show
      </p>
      <p class="font-[Gilroy-Medium] md:text-[16px] text-sm">Sun, Oct 3rd</p>
      <p
        class="font-[Gilroy-Regular] md:mt-4 mt-3 leading-none text-xs md:text-[16px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p
        class="text-[hsla(271,47%,26%,1)] flex items-center gap-2 md:mt-4 mt-3 mb-7 md:text-[16px] text-sm md:mb-8 font-[Gilroy-Regular]"
      >
        View details <span><MdTwoToneArrowOutward /></span>
      </p>
    </div>
  </div>
</template>
