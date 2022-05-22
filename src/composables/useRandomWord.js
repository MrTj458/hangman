const words = [
  "utah",
  "hawaii",
  "mississippi",
  "wisconsin",
  "louisiana",
  "california",
  "idaho",
];

export const useRandomWord = () => {
  const getRandomWord = () => {
    const idx = Math.floor(Math.random() * words.length);
    return words[idx];
  };

  return { getRandomWord };
};
