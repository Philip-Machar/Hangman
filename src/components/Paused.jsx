const Paused = () => {
  return (
    <div className="absolute top-[200px]">
        <div className="bg-[#261676] w-[324px] h-[481px] rounded-[42px] flex justify-center relative opacity-90 z-20">
        <div className="bg-[#2463FF] w-[315px] h-[470px] rounded-[42px] flex justify-center absolute top-0 bg-opacity-90">
            <div className="bg-[#261676] w-[306px] h-[459px] rounded-[42px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center gap-8">
                <img src="/assets/images/Paused.png" width="250px" alt="hangman logo" className="absolute top-[-70px]" />
                {/* button 1*/}
                <div className="text-white bg-black w-[260px] h-[62px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#3d73fb] w-[252px] h-[56px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-[#2463FF] w-[244px] h-[50px] rounded-[42px] absolute bottom-0 grid place-content-center text-3xl tracking-wider">CONTINUE</div>
                        </div>
                    </div>
                </div>
                {/* button 1*/}
                <div className="text-white bg-black w-[260px] h-[62px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#3d73fb] w-[252px] h-[56px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-[#2463FF] w-[244px] h-[50px] rounded-[42px] absolute bottom-0 grid place-content-center text-3xl tracking-wider">NEW CATEGORY</div>
                        </div>
                    </div>
                </div>
                {/* button 3*/}
                <div className="text-white bg-black w-[260px] h-[62px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#FE71FE] w-[252px] h-[56px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[244px] h-[50px] rounded-[42px] absolute bottom-0 grid place-content-center text-3xl tracking-wider">QUITE GAME</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Paused
