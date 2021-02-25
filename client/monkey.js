import React from "react";
import Lottie from "react-lottie";
import monkey from "../public/images/41393-monkey-see.json";

export default function Monkey() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: monkey,

    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  return (
    <div
      style={{
        width: "250px",
        height: "250px",
        objectFit: "cover",
        borderRadius: "100%",
      }}
    >
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
}
