<script setup>
const props = defineProps(["stage"]);
</script>

<template>
  <div class="hangman">
    <div class="bar"></div>
    <div class="rope"></div>
    <div class="pole"></div>
    <div class="base"></div>

    <div class="person">
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

.rope {
  height: 50px;
  width: 4px;
  background-color: var(--text-color);
  position: absolute;
  top: 4px;
  left: calc(50% - 2px);
}

.person {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* animation: sway linear 2s infinite; */
}

@keyframes sway {
  0% {
    transform: rotateZ(0deg);
  }

  25% {
    transform: rotateZ(10deg);
  }

  50% {
    transform: rotateZ(0deg);
  }

  75% {
    transform: rotateZ(-10deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
}

.head {
  width: 50px;
  height: 50px;
  border: 4px solid var(--text-color);
  border-radius: 50%;
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
  top: 100px;
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
