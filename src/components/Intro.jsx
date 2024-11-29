import PlayButton from "./PlayButton";

const Intro = () => {
  return (
    <div className="bg-[#261676] w-[324px] h-[481px] rounded-[42px] flex justify-center relative opacity-90">
      <div className="bg-[#2463FF] w-[315px] h-[470px] rounded-[42px] flex justify-center absolute top-0 bg-opacity-90">
        <div className="bg-[#261676] w-[306px] h-[459px] rounded-[42px] absolute bottom-0 bg-opacity-60 flex justify-center items-center">
          <img src="/assets/images/logo.svg" width="250px" alt="hangman logo" className="absolute top-[-70px]" />
          <PlayButton />
          <button className="text-white">HOW TO PLAY</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

  