import HowToPlayButton from "./HowToPlayButton";
import PlayButton from "./PlayButton";

const Intro = () => {
  return (
    <div className="bg-[#261676] w-[240px] h-[340px] md:w-[470px] md:h-[494px] rounded-[42px] md:rounded-[62px] flex justify-center relative opacity-90">
      <div className="bg-[#2463FF] w-[232px] h-[332px] md:w-[460px] md:h-[482px] rounded-[42px] md:rounded-[62px] flex justify-center absolute top-0 bg-opacity-90">
        <div className="bg-[#261676] w-[223px] h-[325px] md:w-[450px] md:h-[470px] rounded-[42px] md:rounded-[62px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center">
          <img src="/assets/images/logo.svg" alt="hangman logo" className="w-[150px] md:w-[300px] absolute top-[-40px] md:top-[-90px]" />
          <PlayButton />
          <HowToPlayButton />
        </div>
      </div>
    </div>
  );
};

export default Intro;

  