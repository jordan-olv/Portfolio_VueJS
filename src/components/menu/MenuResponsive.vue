<template>
  <div class="resp_menu">
    <input type="checkbox" id="burger-toggle" />
    <label for="burger-toggle" class="burger-menu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </label>
    <div class="menu">
      <div class="menu-inner">
        <ul class="menu-nav">
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#about"
              ><span>
                <div>About me</div>
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#exp"
              ><span>
                <div>Expérience</div>
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#work"
              ><span>
                <div>Work</div>
              </span></a
            >
          </li>
          <li class="menu-nav-item">
            <a class="menu-nav-link" href="#contact"
              ><span>
                <div>Contact</div>
              </span></a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" scoped></script>

<style lang="scss">
@import "@/styles/_utils.scss";
header {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 80px;
  backdrop-filter: blur(10px);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;

  .header__nav {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: flex-end;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 100%;
    color: var(--white);
    counter-reset: item 0;
    z-index: 12;

    ol {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      padding: 0px;
      margin: 0px;
      list-style: none;

      li {
        margin: 0px 5px;
        position: relative;
        counter-increment: item 1;
        font-size: 1rem;

        a {
          padding: 10px;

          &:hover {
            color: var(--main_color);
          }

          &::before {
            content: "0" counter(item) ".";
            margin-right: 5px;
            color: var(--main_color);
            font-size: 1rem;
            text-align: right;
          }
        }
      }
    }
  }
}

@mixin sp-layout {
  @media screen and (max-width: 750px) {
    @content;
  }
}

@mixin pc-layout {
  @media screen and (min-width: 751px) {
    @content;
  }
}

#burger-toggle {
  position: absolute;
  appearance: none;
  opacity: 0;

  &:checked {
    & ~ .menu {
      opacity: 1;
      visibility: visible;

      .menu-nav-link span div,
      img,
      .title p {
        transform: translateY(0);
        transition: 1.2s 0.1s cubic-bezier(0.35, 0, 0.07, 1);
      }

      .image-link {
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) img {
            transition-delay: 0.1s + 0.08s * $i;
          }
        }
      }
    }

    & ~ .burger-menu {
      .line {
        &::after {
          transform: translateX(0);
        }

        &:nth-child(1) {
          transform: translateY(calc(var(--burger-menu-radius) / 5))
            rotate(45deg);
        }

        &:nth-child(2) {
          transform: scaleX(0);
        }

        &:nth-child(3) {
          transform: translateY(calc(var(--burger-menu-radius) / -5))
            rotate(-45deg);
        }
      }
    }
  }
}

.resp_menu {
  display: none;
}

.burger-menu {
  --burger-menu-radius: 4em;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 100;
  display: block;
  width: var(--burger-menu-radius);
  height: var(--burger-menu-radius);
  outline: none;
  cursor: pointer;

  .line {
    position: absolute;
    left: 25%;
    width: 50%;
    height: 3px;
    background: var(--slow_white);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s;

    &:nth-child(1) {
      top: 30%;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 70%;
    }

    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color-darker);
      transform: translateX(-100%);
      transition: 0.25s;
    }

    @for $i from 2 through 3 {
      &:nth-child(#{$i})::after {
        transition-delay: 0.1s * ($i - 1);
      }
    }
  }

  &:hover {
    .line::after {
      transform: translateX(0);
    }
  }
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--main-color);
  opacity: 0;
  overflow-x: hidden;
  visibility: hidden;
  transition: 0.3s;

  &-inner {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
  }

  @include sp-layout {
    display: block;
  }

  &-nav {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style-type: none;

    @include sp-layout {
      flex-direction: column;
    }

    &-item {
      flex: 1;
    }

    &-link {
      position: relative;
      display: inline-flex;
      font-size: 2rem;
      color: white;
      text-decoration: none;

      span {
        overflow: hidden;

        div {
          transform: translateY(102%);
        }
      }

      &::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--primary-color);
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  .gallery {
    margin-top: 60px;
    text-align: center;
  }

  .title {
    font-size: 24px;
    color: white;
    overflow: hidden;

    p {
      font-size: 12px;
      letter-spacing: 2px;
      text-transform: uppercase;
      transform: translateY(102%);
    }
  }

  .images {
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;

    @include sp-layout {
      justify-content: center;
    }

    .image-link {
      width: 15vw;
      margin: 0 12px;
      overflow: hidden;

      @include sp-layout {
        width: 40vw;
        margin: 0 12px 12px 0;
      }

      .image {
        position: relative;
        transition: 0.6s;

        &::before {
          position: absolute;
          content: attr(data-label);
          top: 0;
          left: 0;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          color: white;
          background: rgba(0, 0, 0, 0.6);
          opacity: 0;
          transition: 0.4s;
        }
      }

      &:hover .image {
        transform: scale(1.2);

        &::before {
          opacity: 1;
        }
      }
    }

    img {
      height: 250px;
      transform: translateY(102%);
    }
  }
}
</style>
