import React from "react";

const Home = () => {
  return (
    <div
      class="home-container"
      style={{ background: "unset", border: "1px solid" }}
    >
      <div style={{ width: "100%", float: "left" }}>
        <div style={{ width: "50%", float: "left" }}>
          <p color="gray" style={{ colo: "gray" }}>
            {" "}
            Point
          </p>
          <p style={{ fontWeight: "bold" }}>0 rupee</p>
          <p style={{ colo: "gray" }}>ID:1345566</p>
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <p>
            <button
              style={{ background: "Blue", color: "white", fontWeight: "bold" }}
            >
              recharge
            </button>
          </p>

          <p>
            <button
              style={{
                background: "Gray",
                fontWeight: "bold",
              }}
            >
              Withdraw
            </button>
          </p>
        </div>
      </div>

      <div
        style={{ width: "100%", float: "left", paddingBottom: "50px" }}
      ></div>

      <div style={{ width: "100%", float: "left" }}>
        <div style={{ width: "50%", float: "left" }}>
          <img
            src="https://res.cloudinary.com/fiewin1/image/upload/images/indexTaskV1.png"
            alt=""
          ></img>{" "}
          <b>Task reward</b>
        </div>
        <div style={{ width: "50%", float: "left" }}>
          <img
            src="https://res.cloudinary.com/fiewin1/image/upload/images/indexCheckV1.png"
            alt=""
          ></img>
          <b>Check In</b>
        </div>
      </div>

      <div
        style={{ width: "100%", float: "left", paddingBottom: "50px" }}
      ></div>

      <div style={{ width: "100%", float: "left" }}>
        <div
          style={{
            width: "45%",
            float: "left",
            height: "100px",
            border: "1px solid silver",
            margin: "5px",
          }}
        >
          <img src="xyz.jpg" alt=""></img>
        </div>
        <div
          style={{
            width: "45%",
            float: "left",
            height: "100px",
            border: "1px solid silver",
            margin: "5px",
          }}
        >
          <img src="xyz.jpg" alt=""></img>
        </div>
      </div>

      <div
        style={{ width: "100%", float: "left", paddingBottom: "50px" }}
      ></div>

      <h3>Icon</h3>
      <hr></hr>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <img
          alt=""
          draggable="false"
          src="https://res.cloudinary.com/fiewin/image/upload/images/tab-home-s.png"
          class="css-9pa8cd"
        ></img>
      </a>
      <a
        href="https://www.youtube.com/c/jamesqquick"
        className="youtube social"
      >
        <img
          alt=""
          draggable="false"
          src="https://res.cloudinary.com/fiewin/image/upload/images/tab-share.png"
          class="css-9pa8cd"
        ></img>
      </a>
      <a
        href="https://www.facebook.com/learnbuildteach/"
        className="facebook social"
      >
        <img
          alt=""
          draggable="false"
          src="https://res.cloudinary.com/fiewin/image/upload/images/tab-recharge.png"
          class="css-9pa8cd"
        ></img>
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <img
          alt=""
          draggable="false"
          src="https://res.cloudinary.com/fiewin/image/upload/images/tab-mine.png"
          class="css-9pa8cd"
        ></img>
      </a>
      <hr></hr>
    </div>
  );
};

export default Home;
