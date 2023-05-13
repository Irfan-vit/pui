import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../assets/r";

const style = {
  height: 300,
};

const HomeLoader = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default HomeLoader;