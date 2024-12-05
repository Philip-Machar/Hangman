import { Link } from "react-router-dom"

const PlayButton = () => {
  return (
    <div className="absolute top-[70px] md:top-[105px] lg:top-[90px]">
        <div className="bg-[#000000] w-[113px] h-[113px] md:w-[200px] md:h-[200px] lg:w-[149px] lg:h-[149px] rounded-full flex justify-center relative bg-opacity-30 cursor-pointer">
            <div className="bg-[#FE71FE] w-[108px] h-[108px] md:w-[188px] md:h-[188px] lg:w-[143px] lg:h-[143px] rounded-full flex justify-center absolute top-0">
                <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[102px] h-[102px] md:w-[175px] md:h-[175px] lg:w-[136px] lg:h-[136px] rounded-full absolute top-0 grid place-content-center">
                    <img src="/assets/images/icon-play.svg" alt="play icon" className="w-[40px] md:w-[66px] lg:w-[48px]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayButton

