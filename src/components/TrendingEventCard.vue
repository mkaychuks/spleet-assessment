<script setup lang="ts">
import type { Event } from "@/types";
import { convertTo12Hour } from "@/utils/utils";
import { MdTwoToneArrowOutward } from "@kalimahapps/vue-icons";
import { computed } from "vue";
import { useRouter } from "vue-router";

// the props received in this component
const prop = defineProps<{
  event: Event;
}>();

const router = useRouter();
const navigateToDetails = (id: string) => {
  router.push({ params: { id: id }, name: "details" });
};

const currentTime = computed(() => {
  return convertTo12Hour(prop.event?.time!);
});
</script>
<template>
  <div
    class="rounded md:w-[421px] w-full md:max-w-[421px] max-w-full md:h-[488px] h-[380px] md:max-h-[488px] max-h-[380px] shadow-md border-[0.5px] border-gray-300"
  >
    <!-- the image div -->
    <div
      class="md:h-60 md:max-h-60 h-40 max-h-40 w-full bg-red-500 rounded-t md:mb-6 mb-3"
    >
      <img
        :src="prop.event?.imageUrl"
        :alt="prop.event?.title + 'picture'"
        class="md:h-60 md:max-h-60 h-40 max-h-40 w-full"
      />
    </div>
    <!-- the details of the event -->
    <div class="px-6 flex flex-col items-start">
      <p class="font-[Gilroy-Bold] md:text-[16px] text-sm mb-1">
        {{ event?.title }}
      </p>
      <p class="font-[Gilroy-Medium] md:text-[16px] text-sm">
        Sun, Oct 3rd
        {{ currentTime }}
      </p>
      <p
        class="font-[Gilroy-Regular] md:mt-4 mt-3 leading-none text-xs md:text-[16px] h-[85px] max-h-[85px]"
      >
        {{ prop.event?.description.substring(0, 213) + "..." }}
      </p>
      <p
        class="text-[hsla(271,47%,26%,1)] flex items-center gap-2 md:mt-4 mt-3 mb-7 md:text-[16px] text-sm md:mb-8 font-[Gilroy-Regular] cursor-pointer"
        @click="navigateToDetails(prop.event?.id)"
      >
        View details <span><MdTwoToneArrowOutward /></span>
      </p>
    </div>
  </div>
</template>
