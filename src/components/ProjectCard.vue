<template>
  <li
    class="project-item"
    :data-aos="project.id % 2 == 0 ? 'fade-left' : 'fade-right'"
  >
    <RouterLink class="project-a" :to="`/project/${project.id}`">
      <div class="work__project">
        <div
          class="img_mob"
          :style="{ backgroundImage: 'url(' + project.cover + ')' }"
        ></div>
        <div class="work__project--image">
          <img :src="project.cover" alt="" srcset="" />
        </div>
        <div class="work__project__content">
          <div class="work__project__content--title">
            {{ project.subtitle }}
          </div>
          <div class="work__project__content--subtitle">{{ project.name }}</div>
          <div class="work__project__content--desc">
            {{ project.description }}
          </div>
          <div class="work__project__content--use">
            <ul>
              <li v-for="tag in project.tags">{{ tag }}</li>
            </ul>
          </div>
          <div class="work__project__content--button">
            <a
              v-for="social in project.social"
              :href="social.link"
              v-on:click.stop=""
              target="_blank"
            >
              <!-- GITHUB ICON -->
              <svg
                v-if="social.name == 'github'"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-github"
              >
                <title>GitHub</title>
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import socialIcons from "../data/socialIcon.json";
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

//find svg in social icon
function findIcon(name: string) {
  return socialIcons.find((icon) => icon.name == name)?.svg;
}

const coverUrl = `url(${props.project.cover})`;
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";

.project-item {
  display: flex;
  justify-content: center;
}

.project-a {
  width: 83%;
  text-decoration: none;
}

li {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}
li:hover {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform: scale(1.035);
}
li:nth-of-type(odd) .work__project {
  flex-direction: row;

  &__content {
    &--desc {
      width: 140%;
      margin-left: -40%;
    }
  }
}

li:nth-of-type(even) .work__project {
  flex-direction: row-reverse;
  &__content {
    align-items: flex-start;
    &--desc {
      width: 140%;
      z-index: 2;
      // margin-left: 40%;
    }
  }
}
.work__project {
  display: flex;
  align-items: center;

  &--image {
    width: 60%;
    img {
      border-radius: 0.25em;
    }
    box-shadow: 0px 7px 25px -5px rgba(114, 137, 218, 0.07);
  }
  &__content {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &--title {
      color: $main-color;
      font-size: 14px;
    }

    &--subtitle {
      font-size: 28px;
      margin-bottom: 0.75em;
    }

    &--desc {
      background-color: $main-color;
      padding: 15px;
      border-radius: 0.25em;
      margin-bottom: 0.8em;
      box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
    }

    &--use {
      margin-bottom: 1em;

      ul {
        display: flex;
        gap: 15px;
        opacity: 0.4;
        font-size: 0.85rem;
        flex-wrap: wrap;
        cursor: default;

        li:hover {
          color: $main-color;
        }
      }
    }

    &--button {
      svg {
        width: 20px;
        aspect-ratio: 1/1;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          stroke: $main-color;
          transform: translateY(-4px);
        }
      }
    }
  }
}

// @media screen and (max-width: 800px) {
//   li:nth-of-type(odd) .work__project__content--desc {
//     margin-left: 0;
//   }

//   li:nth-of-type(even) .work__project__content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   li:nth-of-type(odd) .work__project,
//   li:nth-of-type(even) .work__project {
//     flex-direction: column-reverse;
//   }
//   .project-a {
//     width: 65%;
//   }

//   .work__project {
//     justify-content: center;
//     border-radius: 0.35rem;
//     height: 100%;

//     &--image {
//       width: 100%;

//       img {
//         width: 100%;
//         height: auto;
//         height: 200px;
//         object-fit: cover;
//         object-position: center;
//       }
//     }
//     &__content {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       gap: 2px;
//       width: 100%;
//       // height: 20%;
//       // position: absolute;
//       // bottom: 0;
//       // width: 100%;

//       // border-radius: 0 0 0.35rem 0.35rem;

//       &--title {
//       }
//       &--subtitle {
//         margin-bottom: 0;
//         white-space: nowrap;
//         font-weight: 500;
//         font-size: 23px;
//       }

//       &--desc {
//         display: none;
//       }
//       &--button {
//         display: none;
//       }
//       &--use {
//         ul {
//           flex-wrap: nowrap;
//           li {
//             white-space: nowrap;
//           }
//         }
//       }
//     }
//   }
// }

// @media screen and (max-width: 600px) {
//   .project-a {
//     width: 85%;
//   }
// }

// @keyframes changeColor {
//   0% {
//   }

//   100% {
//     background: #3c3c3c;
//   }
// }

// @keyframes slideFromTop {
//   0% {
//     height: 0;
//     opacity: 0;
//   }

//   100% {
//     height: 100%;
//     opacity: 1;
//   }
// }

// @keyframes slideFromBottom {
//   0% {
//     height: 100%;
//     opacity: 1;
//   }

//   100% {
//     height: 0%;
//     opacity: 0;
//   }
// }

// @keyframes gradientUp {
//   0% {
//     background: linear-gradient(
//       180deg,
//       rgba(2, 0, 36, 0) 0%,
//       rgba(57, 67, 125, 0.4430147058823529) 50%,
//       rgba(114, 137, 218, 1) 100%
//     );
//   }

//   100% {
//     background: rgb(2, 0, 36);
//     background: linear-gradient(
//       180deg,
//       rgba(2, 0, 36, 0) 0%,
//       rgba(57, 67, 125, 0.6418942577030813) 0%,
//       rgba(114, 137, 218, 1) 100%
//     );
//   }
// }
</style>
