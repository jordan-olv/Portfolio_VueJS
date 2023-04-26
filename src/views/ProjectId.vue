<template>
  <main>
    <IconSocialLeft />
    <RightBarCopyright />
    <!-- <div class="about">
    <h1>This is an about page</h1>
    <p>{{ route.params.id }}</p>
  </div> -->
    <div class="top-title">
      <TheTitle :name="projetFind.name"></TheTitle>
      <RouterLink to="/" class="back" data-aos="fade-in">
        Go Back
        <span class="material-symbols-outlined"> keyboard_return </span>
      </RouterLink>
    </div>

    <div class="content__main">
      <!-- <img :src="'../' + projetFind.cover" alt="" srcset="" /> -->
      <div class="content__main--left">
        <div class="slider">
          <div class="slider__control">
            <button @click="changeSlide('moins')">
              <span class="material-symbols-outlined"> arrow_back_ios </span>
            </button>
            <button @click="changeSlide('plus')">
              <span class="material-symbols-outlined"> arrow_forward_ios </span>
            </button>
          </div>
          <div class="slider__container">
            <div
              class="slider__item hidden"
              v-for="img in projetFind.sliderImg"
            >
              <img :src="'../' + img.img" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
      <div class="content__main--right">
        <div class="content__main--right-box">
          <h2>Information du projet</h2>
          <div class="projet__info-content">
            <ul>
              <li>
                <span>Catégorie: </span>
                <p>{{ projetFind.subtitle }}</p>
              </li>
              <li>
                <span>Client: </span>
                <p v-if="projetFind.client">{{ projetFind.client }}</p>
                <p v-else>Personnel</p>
              </li>
              <li v-if="projetFind.link">
                <span>Lien: </span>
                <a class="link_a" :href="projetFind.link" target="_blank"
                  >Ici...</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="content__main--right-box">
          <h2>Description</h2>
          <div class="projet__info-content">
            <p>
              {{ projetFind.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import IconSocialLeft from "../components/IconSocialLeft.vue";
import RightBarCopyright from "../components/RightBarCopyright.vue";
import TheTitle from "../components/utils/TheTitle.vue";
import json from "../data/projects.json";
const route = useRoute();

const idxSlider = ref(0);
const projetFind = json.find((item) => item.id == route.params.id);

const changeSlide = (state) => {
  const slider = document.querySelector(".slider__container");
  const sliderItems = document.querySelectorAll(".slider__item");
  sliderItems.forEach((item) => {
    item.classList.add("hidden");
  });

  if (state == "plus") {
    idxSlider.value++;
    if (idxSlider.value > sliderItems.length - 1) {
      idxSlider.value = 0;
    }
  } else if (state == "moins") {
    idxSlider.value--;
    if (idxSlider.value < 0) {
      idxSlider.value = sliderItems.length - 1;
    }
  }
  console.log(sliderItems);
  sliderItems[idxSlider.value].classList.remove("hidden");
};

onMounted(() => {
  changeSlide();
});
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";

:root {
  // --background-color: #171b22cf;
  --background-color: #1d232ecf;
  --text-color: #a1a1aa;

  --card-background-color: rgba(255, 255, 255, 0.015);
  --card-border-color: rgba(255, 255, 255, 0.1);
  --card-box-shadow-1: rgba(0, 0, 0, 0.05);
  --card-box-shadow-1-y: 3px;
  --card-box-shadow-1-blur: 6px;
  --card-box-shadow-2: rgba(0, 0, 0, 0.1);
  --card-box-shadow-2-y: 8px;
  --card-box-shadow-2-blur: 15px;
  --card-label-color: #ffffff;
  --card-icon-color: #d4d4d8;
  --card-icon-background-color: rgba(255, 255, 255, 0.08);
  --card-icon-border-color: rgba(255, 255, 255, 0.12);
  --card-shine-opacity: 0.1;
  --card-shine-gradient: conic-gradient(
    from 205deg at 50% 50%,
    rgba(16, 185, 129, 0) 0deg,
    #4a5991 25deg,
    rgba(74, 89, 145, 0.18) 295deg,
    rgba(16, 185, 129, 0) 360deg
  );
  // --card-line-color: #2a2b2c;
  --card-line-color: #3e485374;
  --card-tile-color: rgba(74, 89, 145, 0.05);

  --card-hover-border-color: rgba(255, 255, 255, 0.2);
  --card-hover-box-shadow-1: rgba(0, 0, 0, 0.04);
  --card-hover-box-shadow-1-y: 5px;
  --card-hover-box-shadow-1-blur: 10px;
  --card-hover-box-shadow-2: rgba(28, 35, 59, 0.1);
  --card-hover-box-shadow-2-y: 15px;
  --card-hover-box-shadow-2-blur: 25px;
  --card-hover-icon-color: #4a5991;
  --card-hover-icon-background-color: rgba(74, 89, 145, 0.1);
  --card-hover-icon-border-color: rgba(74, 89, 145, 0.2);

  --blur-opacity: 0.01;

  &.light {
    --background-color: #fafafa;
    --text-color: #52525b;

    --card-background-color: transparent;
    --card-border-color: rgba(24, 24, 27, 0.08);
    --card-box-shadow-1: rgba(24, 24, 27, 0.02);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(24, 24, 27, 0.04);
    --card-box-shadow-2-y: 2px;
    --card-box-shadow-2-blur: 7px;
    --card-label-color: #18181b;
    --card-icon-color: #18181b;
    --card-icon-background-color: rgba(24, 24, 27, 0.04);
    --card-icon-border-color: rgba(24, 24, 27, 0.1);
    --card-shine-opacity: 0.3;
    --card-shine-gradient: conic-gradient(
      from 225deg at 50% 50%,
      rgba(16, 185, 129, 0) 0deg,
      #4a5991 25deg,
      #edfaf6 285deg,
      #ffffff 345deg,
      rgba(16, 185, 129, 0) 360deg
    );
    --card-line-color: #e9e9e7;
    --card-tile-color: rgba(74, 89, 145, 0.08);

    --card-hover-border-color: rgba(24, 24, 27, 0.15);
    --card-hover-box-shadow-1: rgba(24, 24, 27, 0.05);
    --card-hover-box-shadow-1-y: 3px;
    --card-hover-box-shadow-1-blur: 6px;
    --card-hover-box-shadow-2: rgba(24, 24, 27, 0.1);
    --card-hover-box-shadow-2-y: 8px;
    --card-hover-box-shadow-2-blur: 15px;
    --card-hover-icon-color: #18181b;
    --card-hover-icon-background-color: rgba(24, 24, 27, 0.04);
    --card-hover-icon-border-color: rgba(24, 24, 27, 0.34);

    --blur-opacity: 0.1;
  }

  &.toggle .grid * {
    transition-duration: 0s !important;
  }
}

main {
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
section.project {
  max-width: 80%;
}

.link_a,
p {
  font-weight: 200;
  font-family: "Roboto", sans-serif;
  font-size: 0.95rem;
  display: flex;
  align-items: flex-end;
  z-index: 15;
}

.link_a {
  text-decoration: underline;
}

.top-title {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 15px;
}

.numbered-heading {
  margin-bottom: 0;
  flex-grow: 1;
  margin-top: 0;
  width: 75%;
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

.content__main {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  flex-wrap: wrap;

  &--left {
    flex-shrink: 1;
    height: fit-content;
    width: 70%;
    img {
      object-fit: contain;
      width: 100%;
      height: auto;
      border-radius: 10px;
    }
  }

  &--right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    width: 30%;
    flex-grow: 1;
  }
}

.content__main--right-box {
  width: 90%;
  border-radius: 10px;
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: relative;

  background-color: var(--background-color);
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur)
      var(--card-box-shadow-1),
    0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur)
      var(--card-box-shadow-2),
    0 0 0 1px var(--card-border-color);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background-color: var(--card-background-color);
  }

  h2 {
    font-size: 1.5rem;
    width: 100%;
    white-space: nowrap;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: rgb(255, 255, 255);
      margin-top: -2px;
      opacity: 0.1;
    }
  }
}
.projet__info-content {
  ul {
    li {
      display: flex;

      span {
        color: $main-color;
        font-weight: 500;
        margin-right: 5px;
      }
    }
  }
}

.slider {
  position: relative;
  height: fit-content;
}
.slider__control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  position: absolute;
  width: 100%;
  height: 100%;

  button {
    background: rgba(0, 0, 0, 0.192);
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}

@media (max-width: 1350px) {
  .content__main {
    gap: 20px;
    &--left {
      width: 100%;
    }
    &--right {
      width: 100%;
      flex-direction: row;

      &-box {
        padding: 4%;
        height: 100%;

        &:first-of-type {
          white-space: nowrap;
        }
      }
    }
  }
}

@media (max-width: 890px) {
  .top-title {
    width: 95%;
  }
  .content__main {
    max-width: 100%;
    &--right {
      flex-direction: column;
      align-items: flex-start;
      &-box {
        width: 100%;
      }
    }
  }
}
</style>
