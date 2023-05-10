import style from "./home.module.css";

const Home = () => {
  return (
    <>
      <picture >
        <img src="/home/cloud-2.webp" style={{top: 0, marginTop: "10vh", marginLeft: "10vh",zIndex:-1, position:"absolute", height: "20vh", width:"25vw"}}/>
      </picture>
      <picture >
        <img src="/home/cloud-3.webp" style={{top: 0, marginTop: "10vh", marginRight: "10vh", right:0, zIndex:-1, position:"absolute", height: "20vh", width:"25vw"}}/>
      </picture>
      <div style= {{marginTop: "45vh"}}>
        <h1 style={{textAlign:"center"}}>MineNostalgia</h1>
        <div style={{textAlign:"center"}}>
          <p>Have a trip down memory lane</p>
          <p>and travel to the past versions of minecraft</p>
        </div>
      </div>
    </>
  );
}

export default Home;