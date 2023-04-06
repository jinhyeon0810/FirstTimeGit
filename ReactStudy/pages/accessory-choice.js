import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";
import RadioGroup from "../src/components/RadioGroup";
import Radio from "../src/components/Radio";

export default function accessoryChoice() {
  const router = useRouter();
  const [selectedAccessory, setSelectedAccessory] = useState("");
  const goNextPage = () => {
    localStorage.setItem("selected_accessory", selectedAccessory);
    router.push("/complete");
  };

  // const onChangeHandler = (e) => {
  //   setSelectedAccessory(e.target.value);
  // };
  console.log(selectedAccessory);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">
          모니터와 키보드 중 원하시는 악세서리를 선택하세요.
        </h3>
      </div>

      {/* <label>
        <input
          type="radio"
          name="accessory"
          id="accessory"
          value="Monitor"
          onChange={onChangeHandler}
        />
        Monitor
      </label>
      <label>
        <input
          type="radio"
          name="accessory"
          id="accessory"
          value="Keyboard"
          onChange={onChangeHandler}
        />
        Keyboard
      </label> */}

      <RadioGroup
        name="accessory"
        onChange={(state) => setSelectedAccessory(state)}
      >
        <Radio
          id="monitor"
          name="accessory"
          value="monitor"
          label="monitor"
        ></Radio>
        <Radio
          id="keyboard"
          name="accessory"
          value="keyboard"
          label="keyboard"
        ></Radio>
      </RadioGroup>

      <BottomButton onClick={goNextPage}>완료 화면으로 넘어가기</BottomButton>
    </div>
  );
}
