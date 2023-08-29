import React from "react";
import "../App.css";

function Home() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center", 
    background: "linear-gradient(45deg, pink, purple)",
    padding: "50px",
    color: "black",
  };

  const textStyle = {
    fontSize: "60px",
    fontWeight: "bold",
    margin: "0",
    flex: "1", 
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    marginLeft: "20px",
  };

  return (
    <div className="Home" style={containerStyle}>
      <p style={textStyle}>
        Hello there, My Name is Winnie Jomo <br />A Full Stack Software
        Developer
      </p>
      <img
        src="https://images.pexels.com/photos/3189024/pexels-photo-3189024.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Developer"
        style={imageStyle}
      />
    </div>
  );
}

export default Home;
