const GamePage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div class="absolute inset-0 bg-black/20"></div>
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
                <div className="bg-[#261676] w-[100%] h-[8px] rounded-3xl mx-1"></div>
            </div>
            <img src="/assets/images/icon-heart.svg" width="26px" alt="Heart icon" />
        </div>
      </div>
    </div>
  )
}

export default GamePage
