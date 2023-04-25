<script setup lang="ts">
import IconSocialLeft from "../components/IconSocialLeft.vue";
import RightBarCopyright from "../components/RightBarCopyright.vue";
import Hero from "../components/sections/Hero.vue";
import Experience from "../components/sections/Experience.vue";
import Work from "../components/sections/Work.vue";
import Contact from "../components/sections/Contact.vue";
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <main>
    <TheHeader />
    <IconSocialLeft />
    <RightBarCopyright />
    <Hero />
    <Experience />
    <Work />
    <Contact />
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 0 10%;
}

@media (max-width: 768px) {
  main {
    padding-bottom: 15%;
  }
}
</style>
