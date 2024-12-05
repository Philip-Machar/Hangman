const HowToPlayButton = () => {
  return (
    <div className="absolute bottom-[56px] md:bottom-[50px]">
        <div className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] rounded-[42px] flex justify-center relative bg-opacity-30">
            <div className="bg-[#3d73fb] w-[188px] h-[50px] md:w-[310px] md:h-[70px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                    <div className="bg-[#2463FF] w-[180px] h-[45px] md:w-[300px] md:h-[60px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl tracking-wider">HOW TO PLAY</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowToPlayButton
