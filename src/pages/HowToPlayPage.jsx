import ReturnButton from "../components/ReturnButton"

const HowToPlayPage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div className="w-full absolute top-[40px] flex justify-between px-6">
        <ReturnButton />
        <img src="/assets/images/icon-how-to-play.png" alt="How to play heading" />
      </div>
      <div className="px-8 flex flex-col gap-6 mt-20 tracking-wider">
        <div className="bg-white rounded-3xl p-8 grid place-content-center gap-2 px-8">
            <div className="flex text-2xl gap-4">
                <div className="text-[#2463FF]">01</div>
                <h1 className="text-[#261676]">CHOOSE A CATEGORY</h1>
            </div>
            <p className="text-[#887DC0]">
                First, choose a word category, like animals or movies. 
                The computer then randomly selects a secret word from that 
                topic and shows you blanks for each letter of the word.
            </p>
        </div>
        <div className="bg-white rounded-3xl p-8 grid place-content-center gap-2 px-8">
            <div className="flex text-2xl gap-4">
                <div className="text-[#2463FF]">02</div>
                <h1 className="text-[#261676]">GUESS LETTERS</h1>
            </div>
            <p className="text-[#887DC0]">
                Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. 
                If it’s wrong, you lose some health, which empties after eight incorrect guesses.
            </p>
        </div>
        <div className="bg-white rounded-3xl p-8 grid place-content-center gap-2 px-8">
            <div className="flex text-2xl gap-4">
                <div className="text-[#2463FF]">03</div>
                <h1 className="text-[#261676]">WIN OR LOSE</h1>
            </div>
            <p className="text-[#887DC0]">
                You win by guessing all the letters in the word before your health runs out. 
                If the health bar empties before you guess the word, you lose.
            </p>
        </div>
      </div>
    </div>
  )
}

export default HowToPlayPage


