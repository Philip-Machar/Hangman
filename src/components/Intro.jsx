import PlayButton from "./PlayButton";

const Intro = () => {
  return (
    <div className="bg-[#261676] w-[324px] h-[481px] rounded-3xl flex justify-center relative opacity-90">
      <div className="bg-[#2463FF] w-[315px] h-[470px] rounded-3xl flex justify-center absolute top-0 bg-opacity-90">
        <div className="bg-[#261676] w-[306px] h-[459px] rounded-3xl absolute bottom-0 bg-opacity-60 grid place-content-center">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Intro;

  