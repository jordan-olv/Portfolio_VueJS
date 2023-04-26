<template>
  <section class="work" data-aos="fade-right" id="projet">
    <TheTitle name="Mes projets" nb="03"></TheTitle>
    <ul>
      <ProjectCard
        v-for="item in json.slice(0, limitNumber)"
        :key="item.id"
        :project="item"
      />
    </ul>

    <div class="all_projects">
      <ProjectCardMobile
        v-for="project in json.slice(0, limitNumber)"
        :key="project.id"
        :project="project"
      />
    </div>
    <RouterLink to="/projects" class="moreProj" data-aos="fade-in">
      Voir plus...
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import json from "../../data/projects.json";
import ProjectCard from "../ProjectCard.vue";
import ProjectCardMobile from "../ProjectCardMobile.vue";
import TheTitle from "../utils/TheTitle.vue";
const limitNumber = 3;

console.log(json);
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";

section.work > h2 {
  margin-bottom: 70px;
}
.work ul {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

a.moreProj {
  margin-top: 70px;
  background: $main-color;
  padding: 13px 25px;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    background: transparent;
    color: $main-color;
    border: $main-color 1px solid;
    transition: all 0.15s ease-in-out;
  }
}
.all_projects {
  display: none;
}

@media screen and (max-width: 1100px) {
  a.moreProj {
    margin-top: 40px;
    margin-bottom: 50px;
  }
  .work ul {
    display: none;
  }

  .all_projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    width: calc(100% + 15px);
  }
}
</style>
