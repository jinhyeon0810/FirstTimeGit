import { selector } from "recoil";
import { countState, inputState } from "./atom";

const counterStateSelector = selector({
  key: "CounterStater",

  get: ({ get }) => {
    const counts = get(countState);
    const inputs = get(inputState);

    return `추가된 카운터는 ${inputs} 이고 현재는 ${counts} 입니다`;
  },
});

export default counterStateSelector;
