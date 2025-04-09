<script setup lang="ts">
import DiscoverySection from "@/components/DiscoverySection.vue";
import FooterSection from "@/components/FooterSection.vue";
import HeroSection from "@/components/HeroSection.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import TrendingEvents from "@/components/TrendingEvents.vue";
</script>

<template>
  <header>
    <NavigationBar />
  </header>
  <main>
    <HeroSection />
    <TrendingEvents />
    <DiscoverySection />
  </main>
  <footer>
    <FooterSection />
  </footer>
</template>
