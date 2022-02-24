// It capitalize the first character of a string
export const capitalizeFirstChar = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

// It generates and returns a random number in the [min, max]
export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// It generates and returns an array with random numbers of whichever size it is mentioned
export const generateRandomArray = (freq, min, max, bars) => {
  if (bars)
    for (let i = 0; i < freq; i++) bars[i].style.backgroundColor = "white";
  let arr = [];
  while (freq--) arr.push(generateRandomNumber(min, max));
  return arr;
};

// This is a timer which returns a promise after the given delay in milliseconds
export const timer = (delay) => new Promise((res) => setTimeout(res, delay));
