<template>
  <h2 class="numbered-heading">
    <span v-if="nb" class="spanFont">{{ nb }}.</span
    ><span v-else class="material-symbols-outlined"> public </span>{{ name }}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  nb: {
    type: String,
    required: false,
  },
});

console.log(props.name);
</script>

<style lang="scss" scoped>
@import "@/styles/_utils.scss";
.numbered-heading {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;
  width: 100%;
  font-size: clamp(26px, 5vw, 32px);
  white-space: nowrap;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  transition: opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;

  // &:before {
  //   position: relative;
  //   counter-increment: section;
  //   content: "0" counter(section) ". ";
  //   margin-right: 10px;
  //   color: $main-color;
  //   font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  //   font-size: clamp(16px, 3vw, 20px);
  //   font-weight: 400;
  // }

  &:after {
    content: "";
    display: block;
    position: relative;
    top: 5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: #233554;
  }

  span {
    position: relative;
    margin-right: 10px;
    color: $main-color;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }

  .spanFont {
    font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  }
}
</style>
