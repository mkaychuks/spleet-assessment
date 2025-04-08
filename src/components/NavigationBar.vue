<script setup lang="ts"></script>
<template>
  <nav
    class="bg-[hsla(0,0%,100%,0.6)] container mx-auto py-3 px-6 rounded-[20px] flex justify-between items-center w-full fixed top-[50px] left-14"
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
      <button class="btn-primary">Sign up</button>
    </div>
  </nav>
</template>
