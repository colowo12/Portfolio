import React from "react";
import Lottie from "react-lottie";
import coffee from "../public/images/31818-coffee-girl.json";

export default function Coffee() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coffee,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
}
