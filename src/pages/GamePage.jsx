import Paused from "../components/Paused"
import YouLose from "../components/YouLose"
import YouWin from "../components/YouWin"

const GamePage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center h-screen relative flex flex-col items-center">
      <div class="absolute inset-0 bg-black/50"></div>
      {/* <div class="absolute inset-0 bg-black/60 z-20"></div> */}
      {/* <Paused /> */}
      {/* <YouWin /> */}
      {/* <YouLose /> */}
      {/* Head */}
      <div className="absolute top-[30px] md:top-[78px] px-6 md:px-12 flex justify-between w-full">
        <div className="flex items-center gap-4 md:gap-8">
            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center relative">
                <img src="/assets/images/icon-menu.svg" alt="back icon" className="w-[17px] md:w-[25px]" />
            </div>
            <div className="text-white text-[36px] md:text-[48px] tracking-wider">Countries</div>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
            <div className="w-[57px] h-[16px] md:w-[160px] md:h-[31px] bg-white rounded-3xl flex items-center">
                <div className="bg-[#261676] w-[40%] h-[8px] md:w-[40%] md:h-[13px] rounded-3xl mx-1 md:mx-3"></div>
            </div>
            <img src="/assets/images/icon-heart.svg" alt="Heart icon" className="w-[26px] md:w-[53px]"/>
        </div>
      </div>
      {/* Guesses */}
      <div className="flex items-center flex-col gap-2 md:gap-6 w-full px-6 md:px-12">
        <div className="mt-40 grid grid-cols-9 gap-2 md:translate-x-12">
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">U</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">N</div> 
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">I</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#261676] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0"></div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#261676] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0"></div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">D</div>
            </div>
        </div>
        <div className="grid grid-cols-9 gap-3">
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#261676] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0"></div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">M</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">E</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#261676] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0"></div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">I</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#2463FF] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0">C</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[88px] md:h-[112px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[30px] relative">
                <div className="w-[25px] h-[41px] md:w-[78px] md:h-[105px] bg-[#261676] rounded-xl md:rounded-[30px] text-white grid place-content-center text-[28px] md:text-[64px] absolute bottom-0"></div>
            </div>
        </div>
      </div>
      {/* Letters */}
      <div className="w-full px-6 md:px-12 mt-[130px] grid gap-6">
        <div className="grid grid-cols-9 z-10">
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer opacity-40">A</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">B</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">C</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">D</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer opacity-40">E</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">F</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">G</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">H</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">I</div>
        </div>
        <div className="grid grid-cols-9 z-10">
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">J</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">K</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">L</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">M</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">N</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">O</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">P</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">Q</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer opacity-40">R</div>
        </div>
        <div className="grid grid-cols-9 translate-x-6 md:translate-x-9 z-10">
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">S</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer opacity-40">T</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">U</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">V</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">W</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">X</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">Y</div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] bg-white text-[#261676] text-[24px] md:text-[42px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer">Z</div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
