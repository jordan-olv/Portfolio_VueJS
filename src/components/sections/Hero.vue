<template>
  <section class="hero" id="about" style="gap: 1em">
    <kinesis-container>
      <kinesis-element :strength="15" type="depth">
        <div
          class="hero__content--avatar fadeIn animated-slow"
          data-aos="flip-up"
        >
          <img src="../../assets/static/img/jordan.jpg" alt="" />
        </div>
      </kinesis-element>
    </kinesis-container>
    <div class="hero__content--name">
      <VueWriter :array="arr" :iterations="1" :delay="1000" :start="1000" />
    </div>

    <div class="hero__content--text fadeIn animated-slow">
      <p>
        Passionné de programmation depuis le plus jeune âge. Je suis
        actuellement en formation dans le domaine pour enfin pouvoir vivre de ma
        passion.
      </p>
      <div class="bottom_hero">
        <span></span>
        <a href="cv.pdf" target="_blank" class="moreProj" data-aos="fade-in"
          >Mon CV</a
        >
        <span></span>
      </div>
    </div>

    <a class="container__arrow" href="#exp">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </a>
  </section>
</template>

<script setup lang="ts">
import VueWriter from "vue-writer";

const arr: string[] = ["Jordan Olivier", "Web Developer", "Jordan Olivier"];

const test = () => {
  console.log("test");
};
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";
.is-typed {
  font-family: "Kaushan Script", cursive;
  font-size: 3.5em;
}

.hero__content--text {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
  p {
    line-height: 1.4em;
  }

  .bottom_hero {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    span {
      width: 25%;
      height: 1px;
      background: #768cdb;
      mix-blend-mode: normal;
      opacity: 0.18;
    }
    a.moreProj {
      background: $main-color;
      padding: 6px 12px;
      border-radius: 0.25rem;
      border: 1px solid transparent;
      transition: all 0.15s ease-in-out;
      width: fit-content;
      cursor: pointer;

      &:hover {
        background: transparent;
        color: $main-color;
        border: $main-color 1px solid;
        transition: all 0.15s ease-in-out;
      }
    }
  }
}
</style>
