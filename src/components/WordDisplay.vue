<script setup>
const props = defineProps(["letters"]);
</script>

<template>
  <div class="letters">
    <p v-for="(letter, idx) in props.letters" :key="idx" class="letter">
      {{ letter }}
    </p>
  </div>
</template>

<style>
.letters {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
}

.letter {
  height: 3rem;
  width: 25px;
  text-align: center;
  font-size: 2rem;
  border-bottom: 4px solid var(--text-color);
}
</style>
