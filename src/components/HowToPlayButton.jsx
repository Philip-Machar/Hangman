const HowToPlayButton = () => {
  return (
    <div className="absolute bottom-[56px]">
        <div className="text-white bg-black w-[195px] h-[56px] md:w-[300px] md:h-[72px] rounded-[42px] flex justify-center relative bg-opacity-30">
            <div className="bg-[#3d73fb] w-[188px] h-[50px] md:w-[290px] md:h-[63px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                    <div className="bg-[#2463FF] w-[180px] h-[45px] md:w-[278px] md:h-[55px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl tracking-wider">HOW TO PLAY</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToPlayButton
