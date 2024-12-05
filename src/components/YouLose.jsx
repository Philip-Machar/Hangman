const YouLose = () => {
  return (
    <div className="absolute top-[200px] md:top-[300px]">
        <div className="bg-[#261676] w-[240px] h-[340px] md:w-[470px] md:h-[494px] rounded-[42px] md:rounded-[70px] flex justify-center relative opacity-90 z-20">
        <div className="bg-[#2463FF] w-[232px] h-[332px] md:w-[460px] md:h-[482px] rounded-[42px] md:rounded-[70px] flex justify-center absolute top-0 bg-opacity-90">
            <div className="bg-[#261676] w-[223px] h-[325px] md:w-[450px] md:h-[470px] rounded-[42px] md:rounded-[70px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center gap-8">
                <img src="/assets/images/you-lose-icon.png" alt="hangman logo" className="absolute w-[150px] md:w-[265px] top-[-65px]" />
                {/* button 1*/}
                <div className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#3d73fb] w-[188px] h-[50px] md:w-[310px] md:h-[70px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-[#2463FF] w-[180px] h-[45px] md:w-[300px] md:h-[62px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl tracking-wider">CONTINUE</div>
                        </div>
                    </div>
                </div>
                {/* button 1*/}
                <div className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#3d73fb] w-[188px] h-[50px] md:w-[310px] md:h-[70px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-[#2463FF] w-[180px] h-[45px] md:w-[300px] md:h-[62px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl tracking-wider">NEW CATEGORY</div>
                        </div>
                    </div>
                </div>
                {/* button 3*/}
                <div className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] rounded-[42px] flex justify-center relative bg-opacity-30">
                    <div className="bg-[#FE71FE] w-[188px] h-[50px] md:w-[310px] md:h-[70px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                        <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[180px] h-[45px] md:w-[300px] md:h-[62px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl tracking-wider">QUITE GAME</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default YouLose
