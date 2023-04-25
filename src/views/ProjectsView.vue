<script setup lang="ts">
import IconSocialLeft from "../components/IconSocialLeft.vue";
import RightBarCopyright from "../components/RightBarCopyright.vue";
import TheHeader from "../components/TheHeader.vue";
import AllProjects from "../components/sections/AllProjects.vue";
</script>

<template>
  <main>
    <!-- <TheHeader /> -->
    <IconSocialLeft />
    <RightBarCopyright />
    <AllProjects />
  </main>
</template>

<style scoped>
main {
  padding: 1% 5%;
}

@media (max-width: 768px) {
  main {
    padding: 10% 5%;
  }
}
</style>
