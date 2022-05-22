<script setup>
const props = defineProps(["stage"]);
</script>

<template>
  <div class="hangman">
    <div class="bar"></div>
    <div class="pole"></div>
    <div class="base"></div>

    <div class="swinging">
      <div class="rope"></div>
      <div v-if="props.stage <= 5" class="head"></div>
      <div v-if="props.stage <= 3" class="left-arm"></div>
      <div v-if="props.stage <= 4" class="body"></div>
      <div v-if="props.stage <= 2" class="right-arm"></div>
      <div v-if="props.stage <= 1" class="left-leg"></div>
      <div v-if="props.stage <= 0" class="right-leg"></div>
    </div>
  </div>
</template>

<style>
.hangman {
  display: inline-block;
  position: relative;
  width: auto;
}

.base {
  width: 250px;
  height: 4px;
  background-color: var(--text-color);
}

.pole {
  width: 4px;
  height: 300px;
  background-color: var(--text-color);
}

.bar {
  height: 4px;
  width: 127px;
  background-color: var(--text-color);
}

.swinging {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: 50% 0;
  animation: sway ease-in-out 4s infinite;
}

.swinging div {
  border-radius: 2px;
}

@keyframes sway {
  0% {
    transform: rotateZ(5deg);
  }

  50% {
    transform: rotateZ(-5deg);
  }

  100% {
    transform: rotateZ(5deg);
  }
}

.rope {
  height: 50px;
  width: 4px;
  background-color: var(--text-color);
  position: absolute;
  top: 2px;
  left: calc(50% - 2px);
}

.head {
  width: 50px;
  height: 50px;
  border: 4px solid var(--text-color);
  border-radius: 50% !important;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.left-arm {
  width: 4px;
  height: 50px;
  background-color: var(--text-color);
  position: absolute;
  top: 110px;
  left: 105px;
  transform: rotateZ(45deg);
}

.right-arm {
  width: 4px;
  height: 50px;
  background-color: var(--text-color);
  position: absolute;
  top: 110px;
  left: 142px;
  transform: rotateZ(-45deg);
}

.body {
  position: absolute;
  width: 4px;
  height: 100px;
  background-color: var(--text-color);
  top: 98px;
  left: calc(50% - 2px);
}

.left-leg {
  width: 4px;
  height: 50px;
  background-color: var(--text-color);
  position: absolute;
  top: 190px;
  left: 110px;
  transform: rotateZ(30deg);
}

.right-leg {
  width: 4px;
  height: 50px;
  background-color: var(--text-color);
  position: absolute;
  top: 190px;
  left: 135px;
  transform: rotateZ(-30deg);
}
</style>
