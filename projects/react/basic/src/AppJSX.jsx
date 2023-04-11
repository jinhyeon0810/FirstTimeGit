import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const list = ["가위", "바위", "보"];
  return (
    <>
      <h1>hello</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
