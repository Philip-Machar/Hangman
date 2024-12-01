const GamePage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] bg-cover bg-center h-screen relative">
      <div class="absolute inset-0 bg-black/50"></div>
      {/* Head */}
      <div className="absolute top-[40px] px-6 flex justify-between w-full">
        <div className="flex items-center gap-4">
            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] rounded-full flex justify-center items-center relative">
                <img src="/assets/images/icon-menu.svg" width="17px" alt="back icon" />
            </div>
            <div className="text-white text-[36px]">Countries</div>
        </div>
        <div className="flex justify-center items-center gap-4">
            <div className="w-[57px] h-[16px] bg-white rounded-3xl flex items-center">
                <div className="bg-[#261676] w-[40%] h-[8px] rounded-3xl mx-1"></div>
            </div>
            <img src="/assets/images/icon-heart.svg" width="26px" alt="Heart icon" />
        </div>
      </div>
      {/* Guesses */}
      <div className="flex flex-col gap-4 w-full px-6 items-center">
        <div className="mt-40 grid grid-cols-7 gap-3 translate-x-6">
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">U</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">N</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">I</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#2f1e83] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#261676] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0"></div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#2f1e83] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#261676] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0"></div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">D</div>
            </div>
        </div>
        <div className="grid grid-cols-7 gap-3">
            <div className="w-[37px] h-[64px] bg-[#2f1e83] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#261676] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0"></div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">M</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">E</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#2f1e83] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#261676] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0"></div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">I</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#3d73fb] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#2463FF] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0">C</div>
            </div>
            <div className="w-[37px] h-[64px] bg-[#2f1e83] flex justify-center rounded-xl relative">
                <div className="w-[30px] h-[58px] bg-[#261676] rounded-xl text-white grid place-content-center text-[40px] absolute bottom-0"></div>
            </div>
        </div>
      </div>
      {/* Letters */}
      <div className="px-6 mt-[130px] grid gap-4">
        <div className="grid grid-cols-9 z-10">
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center opacity-30"></div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">B</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">C</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">D</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center opacity-30"></div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">F</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">G</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">H</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">I</div>
        </div>
        <div className="grid grid-cols-9 z-10">
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">J</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">K</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">L</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">M</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">N</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">O</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">P</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">Q</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center opacity-30"></div>
        </div>
        <div className="grid grid-cols-9 translate-x-6">
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">S</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center opacity-30"></div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">U</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">V</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">W</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">X</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">Y</div>
            <div className="w-[29px] h-[56px] bg-white text-[#261676] text-[24px] rounded-lg grid place-content-center">Z</div>
        </div>
      </div>
    </div>
  )
}

export default GamePage
