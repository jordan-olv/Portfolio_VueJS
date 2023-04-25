<template>
  <!-- <v-card class="mx-auto" max-width="344">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title> Top western road trips </v-card-title>

    <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card> -->
  <RouterLink
    :to="`/project/${project.id}`"
    class="project-a"
    data-aos="fade-in"
  >
    <div class="card">
      <div class="top_card">
        <img :src="project.cover" class="project-cover" />
      </div>
      <div class="mid_card">
        <span class="icon">
          <span class="material-symbols-outlined"> {{ project.icon }} </span>
        </span>
        <h4>{{ project.name }}</h4>
      </div>

      <p>{{ project.description }}</p>
      <div class="tags">
        <span v-for="tag in project.tags" class="tag">{{ tag }}</span>
      </div>
      <div class="shine"></div>
      <div class="background">
        <div class="tiles">
          <div class="tile tile-1"></div>
          <div class="tile tile-2"></div>
          <div class="tile tile-3"></div>
          <div class="tile tile-4"></div>

          <div class="tile tile-5"></div>
          <div class="tile tile-6"></div>
          <div class="tile tile-7"></div>
          <div class="tile tile-8"></div>

          <div class="tile tile-9"></div>
          <div class="tile tile-10"></div>
        </div>

        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss">
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

.tags {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  z-index: 5;
  margin-top: 10px;
}
.tag {
  font-size: 10.5px;
  border: 1px solid #ffffff0f;
  background: #556ec547;
  border-radius: 50px;
  padding: 3px 8px;
  color: #7289da;
}

.card {
  background-color: var(--background-color);
  box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur)
      var(--card-box-shadow-1),
    0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur)
      var(--card-box-shadow-2),
    0 0 0 1px var(--card-border-color);
  padding: 16px 16px 16px 16px;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  transition: all 0.25s;
  max-width: 400px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 15px;
    background-color: var(--card-background-color);
  }

  i {
    color: white;
  }

  .top_card {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    img {
      z-index: 10;
      border-radius: 10px 10px 4px 4px;
      width: 100%;
      height: 140px;
      object-fit: cover;
      aspect-ratio: 3/2;
      border: 1px solid #ffffff0b;
    }
  }

  .mid_card {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;
  }
  .project-cover {
  }

  .icon {
    z-index: 2;
    position: relative;
    display: table;
    padding: 8px;

    &::after {
      content: "";
      position: absolute;
      inset: 4.5px;
      border-radius: 50%;
      background-color: var(--card-icon-background-color);
      border: 1px solid var(--card-icon-border-color);
      backdrop-filter: blur(2px);
      transition: background-color 0.25s, border-color 0.25s;
    }

    & > span {
      font-size: 19px;
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
    span {
      position: relative;
      z-index: 1;
      width: 24px;
      height: 24px;
      transform: translateZ(0);
      color: var(--card-icon-color);
      transition: color 0.25s;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  h4 {
    z-index: 2;
    position: relative;
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 2;
    color: var(--card-label-color);
  }

  p {
    z-index: 2;
    position: relative;
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: var(--text-color);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: auto;
  }

  .shine {
    border-radius: inherit;
    position: absolute;
    inset: 0;
    z-index: 1;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.5s;
    transform: rotate(180deg);

    &:before {
      content: "";
      width: 150%;
      padding-bottom: 150%;
      border-radius: 50%;
      position: absolute;
      left: 50%;

      bottom: 55%;
      filter: blur(35px);
      opacity: var(--card-shine-opacity);
      transform: translateX(-50%);
      background-image: var(--card-shine-gradient);
    }
  }

  .background {
    border-radius: inherit;
    position: absolute;
    inset: 0;
    overflow: hidden;
    transform: rotate(180deg);
    opacity: 0.7;
    -webkit-mask-image: radial-gradient(
      circle at 60% 5%,
      black 0%,
      black 15%,
      transparent 60%
    );
    mask-image: radial-gradient(
      circle at 60% 5%,
      black 0%,
      black 15%,
      transparent 60%
    );

    .tiles {
      opacity: 0;
      transition: opacity 0.25s;

      .tile {
        position: absolute;
        background-color: var(--card-tile-color);
        animation-duration: 8s;
        animation-iteration-count: infinite;
        opacity: 0;

        &.tile-4,
        &.tile-6,
        &.tile-10 {
          animation-delay: -2s;
        }

        &.tile-3,
        &.tile-5,
        &.tile-8 {
          animation-delay: -4s;
        }

        &.tile-2,
        &.tile-9 {
          animation-delay: -6s;
        }

        &.tile-1 {
          top: 0;
          left: 0;
          height: 10%;
          width: 22.5%;
        }

        &.tile-2 {
          top: 0;
          left: 22.5%;
          height: 10%;
          width: 27.5%;
        }

        &.tile-3 {
          top: 0;
          left: 50%;
          height: 10%;
          width: 27.5%;
        }

        &.tile-4 {
          top: 0;
          left: 77.5%;
          height: 10%;
          width: 22.5%;
        }

        &.tile-5 {
          top: 10%;
          left: 0;
          height: 22.5%;
          width: 22.5%;
        }

        &.tile-6 {
          top: 10%;
          left: 22.5%;
          height: 22.5%;
          width: 27.5%;
        }

        &.tile-7 {
          top: 10%;
          left: 50%;
          height: 22.5%;
          width: 27.5%;
        }

        &.tile-8 {
          top: 10%;
          left: 77.5%;
          height: 22.5%;
          width: 22.5%;
        }

        &.tile-9 {
          top: 32.5%;
          left: 50%;
          height: 22.5%;
          width: 27.5%;
        }

        &.tile-10 {
          top: 32.5%;
          left: 77.5%;
          height: 22.5%;
          width: 22.5%;
        }
      }
    }

    @keyframes tile {
      0%,
      12.5%,
      100% {
        opacity: 1;
      }

      25%,
      82.5% {
        opacity: 0;
      }
    }

    .line {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.35s;

      &:before,
      &:after {
        content: "";
        position: absolute;
        background-color: var(--card-line-color);
        transition: transform 0.35s;
      }

      &:before {
        left: 0;
        right: 0;
        height: 1px;
        transform-origin: 0 50%;
        transform: scaleX(0);
      }

      &:after {
        top: 0;
        bottom: 0;
        width: 1px;
        transform-origin: 50% 0;
        transform: scaleY(0);
      }

      &.line-1 {
        &:before {
          top: 10%;
        }

        &:after {
          left: 22.5%;
        }

        &:before,
        &:after {
          transition-delay: 0.3s;
        }
      }

      &.line-2 {
        &:before {
          top: 32.5%;
        }

        &:after {
          left: 50%;
        }

        &:before,
        &:after {
          transition-delay: 0.15s;
        }
      }

      &.line-3 {
        &:before {
          top: 55%;
        }

        &:after {
          right: 22.5%;
        }
      }
    }
  }

  &:hover {
    box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1),
      0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur)
        var(--card-hover-box-shadow-2),
      0 0 0 1px var(--card-hover-border-color);

    .icon {
      &::after {
        background-color: var(--card-hover-icon-background-color);
        border-color: var(--card-hover-icon-border-color);
      }

      span {
        color: var(--card-hover-icon-color);
      }
    }

    .shine {
      opacity: 1;
      transition-duration: 0.5s;
      transition-delay: 0s;
    }

    .background {
      .tiles {
        opacity: 1;
        transition-delay: 0.25s;

        .tile {
          animation-name: tile;
        }
      }

      .line {
        opacity: 1;
        transition-duration: 0.15s;

        &:before {
          transform: scaleX(1);
        }

        &:after {
          transform: scaleY(1);
        }

        &.line-1 {
          &:before,
          &:after {
            transition-delay: 0s;
          }
        }

        &.line-2 {
          &:before,
          &:after {
            transition-delay: 0.15s;
          }
        }

        &.line-3 {
          &:before,
          &:after {
            transition-delay: 0.3s;
          }
        }
      }
    }
  }
}

.day-night {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  opacity: 0.3;

  input {
    display: none;

    & + div {
      border-radius: 50%;
      width: 20px;
      height: 20px;
      position: relative;
      box-shadow: inset 8px -8px 0 0 var(--text-color);
      transform: scale(1) rotate(-2deg);
      transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;

      &:before {
        content: "";
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        transition: background-color 0.3s ease;
      }

      &:after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin: -3px 0 0 -3px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 var(--text-color), 0 23px 0 var(--text-color),
          23px 0 0 var(--text-color), -23px 0 0 var(--text-color),
          15px 15px 0 var(--text-color), -15px 15px 0 var(--text-color),
          15px -15px 0 var(--text-color), -15px -15px 0 var(--text-color);
        transform: scale(0);
        transition: all 0.3s ease;
      }
    }

    &:checked + div {
      box-shadow: inset 20px -20px 0 0 var(--text-color);
      transform: scale(0.5) rotate(0deg);
      transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;

      &:before {
        background: var(--text-color);
        transition: background-color 0.3s ease 0.1s;
      }

      &:after {
        transform: scale(1);
        transition: transform 0.5s ease 0.15s;
      }
    }
  }
}
</style>
