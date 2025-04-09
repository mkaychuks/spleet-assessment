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
} from "@kalimahapps/vue-icons";
</script>

<template>
  <header>
    <nav
      class="container mx-auto py-3 px-6 rounded-[20px] flex justify-between items-center w-full transition-transform duration-300 z-50"
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
  </header>

  <!-- the main content of the page -->
  <section class="container px-6 md:px-0 md:mx-auto pt-4 md:pt-6">
    <!-- the image of the page -->
    <div class="w-full h-[480px] bg-red-400 rounded"></div>

    <!-- the event details -->
    <div class="grid md:grid-cols-8 mt-12 gap-8">
      <!-- the left side -->
      <div class="md:col-span-5 space-y-8 flex-col items-start justify-center">
        <!-- the title of the event -->
        <div>
          <h3 class="text-2xl">I said what I said Live Show</h3>
          <!-- the date and time -->
          <div class="flex items-center gap-6 mb-2">
            <p
              class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2"
            >
              <span
                ><MdSharpCalendarToday
                  class="text-[hsla(271,70%,60%,1)] text-[24px]"
              /></span>
              Sunday, October 3rd, 2023
            </p>
            <p
              class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2 mb-2 pt-2"
            >
              <span
                ><MdSchedule
                  class="text-[hsla(271,70%,60%,1)] text-[24px]" /></span
              >6PM
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
            Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos
            Island 102273, Lagos
          </p>
          <p class="font-[Gilroy-Regular] text-[16px] flex items-center gap-2">
            <span
              ><MdOutlinedPerson
                class="text-[hsla(271,70%,60%,1)] text-[24px]" /></span
            >FK, Jollz
          </p>
        </div>

        <!-- the event details -->
        <div>
          <p class="text-[16px] mb-5">Event description</p>
          <p class="font-[Gilroy-Regular]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <!-- the tickets pricing -->
        <div>
          <p class="text-[16px] mb-5">Tickets Pricing</p>

          <div class="w-[224px] flex justify-between items-center">
            <div>
              <p>Single</p>
              <p class="text-[hsla(271,70%,60%,1)]">NGN 5,000</p>
            </div>
            <div>
              <p>Pair</p>
              <p class="text-[hsla(271,70%,60%,1)]">NGN 9,000</p>
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
              class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded"
            >
              <IoOutlineMail class="text-white" />
            </div>
            <div
              class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded"
            >
              <IoLogoTwitter class="text-white" />
            </div>
            <div
              class="bg-[hsla(271,47%,46%,1)] w-8 h-8 flex items-center justify-center rounded"
            >
              <IoLogoInstagram class="text-white" />
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
</template>
