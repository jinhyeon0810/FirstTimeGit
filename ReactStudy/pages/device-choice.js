import { useRouter } from "next/router";
import React, { useState } from "react";
import BottomButton from "../src/components/BottomButton";

export default function deviceChoice() {
  const router = useRouter();
  const [selectedDevice, setSelectedDevice] = useState("");

  const goNextPage = () => {
    localStorage.setItem("selected_device", selectedDevice);
    router.push("/accessory-choice");
  };

  const onChangeHandler = (e) => {
    setSelectedDevice(e.target.value);
  };
  console.log(selectedDevice);

  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="title">아이맥과 맥북 중 원하시는 장비를 선택하세요.</h3>
      </div>

      <label>
        <input
          type="radio"
          name="device"
          id="device"
          value="IMac"
          onChange={onChangeHandler}
        />
        IMac
      </label>
      <label>
        <input
          type="radio"
          name="device"
          id="device"
          value="Macbook"
          onChange={onChangeHandler}
        />
        Macbook
      </label>

      <BottomButton onClick={goNextPage}>
        악세서리 화면으로 넘어가기
      </BottomButton>
    </div>
  );
}
