import { Link } from "react-router-dom";
import HowToPlayButton from "./HowToPlayButton";
import PlayButton from "./PlayButton";

const Intro = () => {
  return (
    <div className="bg-[#261676] w-[240px] h-[340px] md:w-[470px] md:h-[494px] lg:w-[370px] lg:h-[420px] rounded-[42px] md:rounded-[62px] flex justify-center relative opacity-90">
      <div className="bg-[#2463FF] w-[232px] h-[332px] md:w-[460px] md:h-[482px] lg:w-[360px] lg:h-[410px] rounded-[42px] md:rounded-[62px] flex justify-center absolute top-0 bg-opacity-90">
        <div className="bg-[#261676] w-[223px] h-[325px] md:w-[450px] md:h-[470px] lg:w-[350px] lg:h-[400px] rounded-[42px] md:rounded-[62px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center">
          <img
            src="/assets/images/logo.svg"
            alt="hangman logo"
            className="w-[150px] md:w-[300px] lg:w-[220px] absolute top-[-40px] md:top-[-90px] lg:top-[-65px]"
          />
          <Link to="/categories" className="w-full flex justify-center">
            <PlayButton />
          </Link>
          <Link to="/how-to-play" className="w-full flex justify-center">
            <HowToPlayButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
