<template>
  <div class="projects" data-aos="fade-right">
    <div class="projects_content">
      <div class="top-title">
        <TheTitle name="Mes projets" nb="03"></TheTitle>
        <RouterLink to="/" class="back" data-aos="fade-in">
          Go Back
          <span class="material-symbols-outlined"> keyboard_return </span>
        </RouterLink>
      </div>
      <div class="all_projects">
        <ProjectCardMobile
          v-for="project in json"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import json from "../../data/projects.json";
import ProjectCardMobile from "../ProjectCardMobile.vue";
import TheTitle from "../utils/TheTitle.vue";

const show = ref(false);
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";

.numbered-heading {
  margin-bottom: 0;
  flex-grow: 1;
  margin-top: 0;
  width: 75%;
}
.projects {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: none;
  margin-top: 3%;
  margin-bottom: 3%;
}

.projects_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.all_projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}

.top-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 15px;
}

a.back {
  background: $main-color;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 0;
  border-radius: 5px;
  height: 30px;
  margin-left: auto;
}

@media screen and (max-width: 450px) {
  section.projects {
    padding: 55px 15px;
  }

  .projects_content {
    width: 95%;
  }
}
</style>
