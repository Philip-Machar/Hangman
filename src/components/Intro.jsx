import HowToPlayButton from "./HowToPlayButton";
import PlayButton from "./PlayButton";

const Intro = () => {
  return (
    <div className="bg-[#261676] w-[324px] h-[481px] md:w-[592px] md:h-[500px] rounded-[42px] flex justify-center relative opacity-90">
      <div className="bg-[#2463FF] w-[315px] h-[470px] md:w-[575px] md:h-[485px] rounded-[42px] flex justify-center absolute top-0 bg-opacity-90">
        <div className="bg-[#261676] w-[306px] h-[459px] md:w-[560px] md:h-[470px] rounded-[42px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center">
          <img src="/assets/images/logo.svg" alt="hangman logo" className="w-[250px] md:w-[356px] absolute top-[-70px] md:top-[-100px]" />
          <PlayButton />
          <HowToPlayButton />
        </div>
      </div>
    </div>
  );
};

export default Intro;

  