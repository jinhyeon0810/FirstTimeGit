import { atom } from "recoil";

let countState = atom({
  key: "counters",
  default: 0,
});

let inputState = atom({
  key: "input",
  default: "",
});

export { countState, inputState };
