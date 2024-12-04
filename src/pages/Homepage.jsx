import Intro from "../components/Intro"

import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh();
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh);
    };
  }, []);

  return (
    <div
      className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Intro />
    </div>
  );
};

export default Homepage;

