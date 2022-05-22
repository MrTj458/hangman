<script setup>
import { onMounted, ref } from "vue";
import HangMan from "./components/HangMan.vue";
import WordDisplay from "./components/WordDisplay.vue";
import { useRandomWord } from "./composables/useRandomWord";

const { getRandomWord } = useRandomWord();

const message = ref(null);
const word = ref("");
const lives = ref(6);
const guessed = ref([]);

const restart = () => {
  window.location.reload();
};

const handleKeyPress = (e) => {
  const guess = e.key.toLowerCase();

  if (word.value.includes(guess)) {
    for (const i in word.value) {
      if (word.value[i] === guess) {
        guessed.value[i] = guess;
      }
    }
  } else {
    lives.value = lives.value - 1;
  }

  if (!guessed.value.includes(null)) {
    message.value = "Congratulations!";
  }

  if (lives.value === 0) {
    message.value = "You ran out of attempts!";
    guessed.value = word.value.split("");
  }
};

onMounted(() => {
  word.value = getRandomWord();
  guessed.value = Array(word.value.length).fill(null);

  window.addEventListener("keypress", handleKeyPress);
});
</script>

<template>
  <h1 class="title">Hangman</h1>
  <small class="subtitle">Press a key to make a guess.</small>

  <div v-if="message" class="message-box">
    <h2 class="message">{{ message }}</h2>
    <button @click="restart" class="btn">Play Again</button>
  </div>

  <HangMan :stage="lives" />
  <WordDisplay :letters="guessed" />
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-weight: bold;
}

.subtitle {
  margin-bottom: 2rem;
}

.message-box {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.message {
  margin-bottom: 2rem;
}

.btn {
  border: 4px solid var(--text-color);
  color: var(--text-color);
  background: none;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  border-radius: 2px;
}

.btn:hover {
  color: var(--bg-color);
  background-color: var(--text-color);
}
</style>
