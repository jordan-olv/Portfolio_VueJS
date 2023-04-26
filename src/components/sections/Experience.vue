<template>
  <section class="exp" data-aos="fade-right" id="exp">
    <TheTitle name="Mon Expérience" nb="02"></TheTitle>
    <div class="exp__content">
      <div class="timeline">
        <div class="article_group">
          <article :class="{ active: tabSelected == 'one' }">
            <input type="radio" value="one" v-model="tabSelected" />
            <h3 class="iconTitle">
              <img
                src="../../assets/static/img/person.svg"
                class="formaParcoursIcon"
                alt=""
                srcset=""
              />
              Autodidacte
            </h3>
            <p>2020 - Present</p>
          </article>
          <article :class="{ active: tabSelected == 'two' }">
            <input type="radio" value="two" v-model="tabSelected" />
            <h3 class="iconTitle">
              <img
                src="../../assets/static/img/forma.svg"
                class="formaParcoursIcon"
                alt=""
                srcset=""
              />
              IFPA Formation
            </h3>
            <p>Février 2022 - Juin 2022</p>
          </article>
          <article :class="{ active: tabSelected == 'three' }">
            <input type="radio" value="three" v-model="tabSelected" />

            <h3 class="iconTitle">
              <img
                src="../../assets/static/img/forma.svg"
                class="formaParcoursIcon"
                alt=""
                srcset=""
              />
              Développeur Web / Mobile
            </h3>
            <p>Octobre 2022 - Octobre 2023</p>
          </article>
        </div>
      </div>

      <div class="tab__content">
        <p :class="[{ hidden: tabSelected != 'one' }, 'tabcontent', 'fadeIn']">
          J'ai commencé mon apprentissage sur Le
          <span>siteduzero</span> devenue openclassroom, Par la suite j'ai
          principalement appris sur le terrain en réalisant des projets fictif.
        </p>
        <p :class="[{ hidden: tabSelected != 'two' }, 'tabcontent', 'fadeIn']">
          J'ai effectué une formation
          <span>Technique et découverte en informatique</span> afin de pouvoir
          poursuivre avec une formation qualifiante dans le développement web.
        </p>
        <p
          :class="[{ hidden: tabSelected != 'three' }, 'tabcontent', 'fadeIn']"
        >
          Je suis actuellement en formation Développeur Web / Web Mobile au
          <span>CCI de Lyon</span>, afin d'obtenir un diplôme dans le
          développement
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import TheTitle from "../utils/TheTitle.vue";

const openTabName: Ref<string> = ref("defaultOpen");
const tabSelected = ref("one");

let tabcontent = document.querySelectorAll(".tabcontent");

// document.getElementById(openTabName.value)?.click();

// function openTab(evt: any, TabName: string) {
//   let i: number = 0;
//   let tabcontent = document.querySelectorAll<HTMLElement>(".tabcontent");
//   let tablinks = document.getElementsByClassName("tablinks");

//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(TabName)!.style.display = "block";
//   evt.currentTarget.className += " active";
// }

// document.getElementById("defaultOpen")!.click();
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";

.exp__content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  gap: 1em;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    position: absolute;
    top: -45px;
    right: 20px;
    font-family: "SF Mono Bold";
    text-align: right;

    &:after {
      content: "";
      display: block;
      position: relative;
      top: -14px;
      width: 300px;
      height: 1px;
      margin-left: 200px;
      background-color: red;
    }

    span {
      color: $main-color;
    }
  }
}

.tab {
  position: relative;
  display: flex;
  z-index: 3;
  width: max-content;
  padding: 0px;
  margin: 0px;
  list-style: none;
  // max-width: 950px;
  // width: 100%;
  // padding: 40px 50px 40px 40px;
  // border: 2px solid $main-color;
  // margin: 0 20px;
  // border-radius: 12px;
  // box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

/* Style the buttons inside the tab */
.tab div {
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0px 20px 2px;

  background-color: transparent;
  color: #8892b0;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-size: 14px;
  text-align: left;
  white-space: nowrap;
}

.tab div:nth-child(odd) {
  border-bottom: 2px solid #233554;
  top: -50%;
}
.tab div:nth-child(even) {
  border-top: 2px solid #233554;
  top: 50%;
}

/* Change background color of buttons on hover */
.tab div:hover {
  background: transparent;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  //  border: 1px solid $main-color;
}

/* Create an active/current "tab button" class */
.tab div.active {
  background: rgba($color: $main-color, $alpha: 0.05);
  border-top-right-radius: 0.35em;
  border-top-left-radius: 0.35em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 2px solid $main-color;
}

/* Style the tab content */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.tab__content {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.tabcontent {
  width: 100%;
  border-left: none;
  animation: fadeIn 0.5s ease-in-out;
  color: $white;
  position: relative;
  font-family: "Roboto", sans-serif;
  border: 1px solid $main-color;
  padding: 30px 20px 30px 50px;
  border-radius: 0.35rem;
  width: 85%;
  box-shadow: 0px 7px 25px -5px rgba(114, 137, 218, 0.16);
  font-weight: 300;
  span {
    color: $main-color;
    font-weight: 400;
  }

  &::before {
    content: "▹";
    position: absolute;
    left: 30px;
    color: $main-color;
  }

  h3 {
    color: $main-color;
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
  }

  .range {
    margin-bottom: 15px;
    color: $slow_white;
    font-size: 14px;
  }
}

input[type="radio"] {
  position: absolute;
  cursor: pointer;
  // visibility: hidden;
  opacity: 0;
  width: 100%;
  height: 160%;
  z-index: 2;
}

.tablinks {
  position: relative;
}

.timeline {
  position: relative;
  width: 100%;
}
.timeline:after {
  content: "";
  position: absolute;
  left: 20px;
  right: 20px;
  top: 50%;
  height: 8px;
  background: $main-color;
  border-radius: 3px;
  z-index: 1;
  transform: translateY(-50%);
}

.timeline article.active:before {
  background: $main_color;
  border: 3px solid white;
}
.timeline article {
  display: inline-block;
  opacity: 1;
  position: relative;

  width: auto;
  height: 70px;
  padding: 10px;
  // margin: 0 0 50px 0;
  vertical-align: top;
}

.timeline article:before {
  content: "";
  display: block;
  position: absolute;
  top: calc(100% + 26px);
  left: 50%;
  background: $white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.timeline article:nth-child(even) {
  margin-top: 140px;
  margin-bottom: 0;

  input[type="radio"] {
    top: -75%;
  }
}
.timeline article:nth-child(even):before {
  top: auto;
  bottom: calc(100% + 26px);
}
.timeline article:nth-child(even):after {
  top: auto;
  bottom: 100%;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-bottom: 20px solid #eeeeee;
  border-top: none;
}

.timeline article h3 {
  font-size: 1rem;
}

.timeline article p {
  font-size: 0.8rem;
  color: $main-color;
}

// p.tabcontent {
//   background: $main-color;
//   padding: 1rem;
//   margin-top: 20px;
//   border-radius: 0.5rem;
// }

.formaParcoursIcon {
  width: 30px;
  color: white;
  fill: white;
}

.iconTitle {
  display: flex;
  align-items: center;
  gap: 5px;
}

.article_group {
  display: flex;
}

@media screen and (max-width: 650px) {
  .tabcontent {
    width: 100%;
  }
  .timeline {
    display: flex;
    gap: 20px;
    justify-content: center;

    input[type="radio"] {
      height: 100%;
      width: calc(100% + 25px);
    }

    .article_group {
      flex-direction: column;
    }

    &:after {
      width: 8px;
      height: 230px;
      top: 0;
      position: inherit;
      transform: translateX(0) translateY(0);
      left: 0;
      right: 0;
    }

    article {
      margin: 0;

      &:nth-child(even) {
        input[type="radio"] {
          top: 0;
        }

        &:before {
          top: 50%;
        }
      }
      &::before {
        left: calc(100% + 20px);
        top: 50%;
        transform: translateY(-50%) translateX(-25%);
      }
    }

    article:nth-child(even) {
      margin-top: 0;
    }
  }
}
</style>
