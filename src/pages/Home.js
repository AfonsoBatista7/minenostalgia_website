import style from "./home.module.css";

const Home = () => {
  return (
    <>
      <picture >
        <img src="/home/cloud-2.webp" style={{marginLeft: "10vh",zIndex:-1, position:"absolute", height: "20vh", width:"25vw"}}/>
      </picture>
      <picture >
        <img src="/home/cloud-3.webp" style={{marginRight: "10vh", right:0, zIndex:-1, position:"absolute", height: "20vh", width:"25vw"}}/>
      </picture>
      <h1>Home</h1>
      <p>Welcome to MineNostalgia!</p>
    </>
  );
}

export default Home;