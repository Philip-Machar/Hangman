import { useEffect } from "react";
import ReturnButton from "../components/ReturnButton";
import { Link } from "react-router-dom";

const HowToPlayPage = () => {
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
      className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center relative grid place-content-center"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full absolute top-[30px] md:top-[78px] lg:top-[50px] flex justify-between px-6 md:px-12 lg:px-24 lg:mb-24">
        <Link to="/"><ReturnButton /></Link>
        <img
          src="/assets/images/icon-how-to-play.png"
          alt="How to play heading"
          className="w-[180px] md:w-[343px]"
        />
        <div className="hidden md:block"></div>
      </div>
      <div className="px-6 md:px-24 lg:px-24 flex flex-col lg:flex-row gap-6 mt-20 tracking-wider">
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-6 grid place-content-center gap-2 z-10">
          <div className="flex text-2xl gap-4">
            <div className="text-[#2463FF] md:text-[40px] lg:text-[28px]">01</div>
            <h1 className="text-[#261676] md:text-[40px] lg:text-[28px]">CHOOSE A CATEGORY</h1>
          </div>
          <p className="text-[#887DC0] text-[16px] md:text-[20px]">
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-6 grid place-content-center gap-2 px-8 z-10">
          <div className="flex text-2xl gap-4">
            <div className="text-[#2463FF] md:text-[40px] lg:text-[28px]">02</div>
            <h1 className="text-[#261676] md:text-[40px] lg:text-[28px]">GUESS LETTERS</h1>
          </div>
          <p className="text-[#887DC0] md:text-[20px]">
            Take turns guessing letters. The computer fills in the relevant blank
            spaces if your guess is correct. If it’s wrong, you lose some health,
            which empties after eight incorrect guesses.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-10 lg:p-6 grid place-content-center gap-2 px-8 z-10">
          <div className="flex text-2xl gap-4">
            <div className="text-[#2463FF] md:text-[40px] lg:text-[28px]">03</div>
            <h1 className="text-[#261676] md:text-[40px] lg:text-[28px]">WIN OR LOSE</h1>
          </div>
          <p className="text-[#887DC0] md:text-[20px]">
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlayPage;
