import { useEffect } from "react";
import ReturnButton from "../components/ReturnButton";

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
      className="relative grid place-content-center"
      style={{
        height: "calc(var(--vh, 1vh) * 100)",
        backgroundImage: "url('/assets/images/background-mobile.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full absolute top-[30px] md:top-[78px] flex justify-between px-6 md:px-12 lg:px-24 lg:mb-24">
        <ReturnButton />
        <img
          src="/assets/images/icon-how-to-play.png"
          alt="How to play heading"
          className="md:w-[343px]"
        />
        <div className="hidden md:block"></div>
      </div>
      <div className="px-6 md:px-24 lg:px-24 flex flex-col lg:flex-row gap-6 mt-20 tracking-wider">
        <div className="bg-white rounded-3xl p-6 md:p-10 grid place-content-center gap-2 z-10">
          <div className="flex text-2xl gap-4 lg:mb-4">
            <div className="text-[#2463FF] md:text-[40px]">01</div>
            <h1 className="text-[#261676] md:text-[40px]">CHOOSE A CATEGORY</h1>
          </div>
          <p className="text-[#887DC0] text-[16px] md:text-[20px]">
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-10 grid place-content-center gap-2 px-8 z-10">
          <div className="flex text-2xl gap-4 lg:mb-4">
            <div className="text-[#2463FF] md:text-[40px]">02</div>
            <h1 className="text-[#261676] md:text-[40px]">GUESS LETTERS</h1>
          </div>
          <p className="text-[#887DC0] md:text-[20px]">
            Take turns guessing letters. The computer fills in the relevant blank
            spaces if your guess is correct. If it’s wrong, you lose some health,
            which empties after eight incorrect guesses.
          </p>
        </div>
        <div className="bg-white rounded-3xl p-6 md:p-10 grid place-content-center gap-2 px-8 z-10">
          <div className="flex text-2xl gap-4 lg:mb-4">
            <div className="text-[#2463FF] md:text-[40px]">03</div>
            <h1 className="text-[#261676] md:text-[40px]">WIN OR LOSE</h1>
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
