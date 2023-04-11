import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";

function AppProfile() {
  const handleClick = (e) => {
    console.log(e);
    alert("하이 bro");
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <Avatar
        img="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDJfMTc3%2FMDAxNjYyMTExNjIzOTg2.iOlN5EeSqgxnnOMsf8_WBzNgLGK8OC9X0BYEnR7OyFYg.jP2VFDYbpveqHCOS-lstRRH1m3EwOtE8y4GpBFEPzLIg.PNG.naky1121%2Fimage.png&type=sc960_832"
        isNew={true}
      />
      <Profile
        img="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDJfMTc3%2FMDAxNjYyMTExNjIzOTg2.iOlN5EeSqgxnnOMsf8_WBzNgLGK8OC9X0BYEnR7OyFYg.jP2VFDYbpveqHCOS-lstRRH1m3EwOtE8y4GpBFEPzLIg.PNG.naky1121%2Fimage.png&type=sc960_832"
        name="jinhyeon"
        job="프론트엔드 개발자"
        isNew={true}
      />

      <Profile
        img="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDJfMTc3%2FMDAxNjYyMTExNjIzOTg2.iOlN5EeSqgxnnOMsf8_WBzNgLGK8OC9X0BYEnR7OyFYg.jP2VFDYbpveqHCOS-lstRRH1m3EwOtE8y4GpBFEPzLIg.PNG.naky1121%2Fimage.png&type=sc960_832"
        name="nami"
        job="백엔드 개발자"
      />

      <Profile
        img="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA5MDJfMTc3%2FMDAxNjYyMTExNjIzOTg2.iOlN5EeSqgxnnOMsf8_WBzNgLGK8OC9X0BYEnR7OyFYg.jP2VFDYbpveqHCOS-lstRRH1m3EwOtE8y4GpBFEPzLIg.PNG.naky1121%2Fimage.png&type=sc960_832"
        name="chopa"
        job="디자이너"
      />
    </>
  );
}

export default AppProfile;
