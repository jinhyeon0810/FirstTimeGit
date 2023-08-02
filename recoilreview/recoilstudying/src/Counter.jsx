import React from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { countState, inputState } from "./atom";
import counterStateSelector from "./selector";

export default function Counter() {
  const [count, setCount] = useRecoilState(countState);

  const currentCount = useRecoilValue(countState);

  const counterHandler = useSetRecoilState(countState);

  const counterReset = useResetRecoilState(countState);
  const inputReset = useResetRecoilState(inputState);

  const [input, setInput] = useRecoilState(inputState);

  const resultValue = useRecoilValue(counterStateSelector);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    counterHandler((prev) => prev - 1);
  };

  const resetCount = () => {
    counterReset();
    inputReset();
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const addInputCount = () => {
    setCount((prev) => prev + Number(input));
  };

  return (
    <div>
      <div>{count}</div>
      <div>{currentCount}</div>
      <button onClick={addCount}>+</button>
      <button onClick={minusCount}>-</button>
      <button onClick={resetCount}>reset</button>

      <div>
        <input type="text" onChange={onChange} value={input} />
        <button onClick={addInputCount}>입력하세요</button>
        <div>{resultValue}</div>
      </div>
    </div>
  );
}
