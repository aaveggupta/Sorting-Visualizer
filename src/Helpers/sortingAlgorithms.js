import { timer } from "./helpers";

// Bubble Sort
export const bubbleSort = async (arr, bars, speed) => {
  let size = arr.length;
  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < size - i - 1; j++) {
      bars[j].style.backgroundColor = "var(--comparing-color)";
      bars[j + 1].style.backgroundColor = "var(--comparing-color)";

      await timer(speed);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        bars[j].style.height = `${arr[j]}rem`;
        bars[j + 1].style.height = `${arr[j + 1]}rem`;

        bars[j].style.backgroundColor = "var(--swapping-color)";
        bars[j + 1].style.backgroundColor = "var(--swapping-color)";

        await timer(speed);
      }
      bars[j].style.backgroundColor = "#dfdfdf";
      bars[j + 1].style.backgroundColor = "#dfdfdf";
    }
    bars[size - i - 1].style.backgroundColor = "var(--sorted-color)";
  }
  return true;
};

// Merge Sort
export const selectionSort = async (arr, bars, speed) => {
  let size = arr.length;
  for (let i = 0; i < size; ++i) {
    for (let j = i + 1; j < size; j++) {
      bars[i].style.backgroundColor = "var(--comparing-color)";
      bars[j].style.backgroundColor = "var(--comparing-color)";

      await timer(speed);

      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];

        bars[j].style.height = `${arr[j]}rem`;
        bars[i].style.height = `${arr[i]}rem`;

        bars[j].style.backgroundColor = "var(--swapping-color)";
        bars[i].style.backgroundColor = "var(--swapping-color)";

        await timer(speed);
      }
      bars[j].style.backgroundColor = "#dfdfdf";
      bars[i].style.backgroundColor = "#dfdfdf";
    }
    bars[i].style.backgroundColor = "var(--sorted-color)";
  }
  return true;
};
