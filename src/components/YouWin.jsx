import { Link } from "react-router-dom"

const YouWin = ({ handlePlayAgain, handleHomepage }) => {
  return (
    <div className="absolute top-[200px] md:top-[290px] lg:top-[150px]">
        <div className="bg-[#261676] w-[240px] h-[280px] md:w-[470px] md:h-[424px] lg:w-[370px] lg:h-[360px] rounded-[42px] md:rounded-[70px] flex justify-center relative opacity-90 z-20">
            <div className="bg-[#2463FF] w-[232px] h-[272px] md:w-[460px] md:h-[412px] lg:w-[360px] lg:h-[350px] rounded-[42px] md:rounded-[70px] flex justify-center absolute top-0 bg-opacity-90">
                <div className="bg-[#261676] w-[223px] h-[265px] md:w-[450px] md:h-[400px] lg:w-[350px] lg:h-[340px] rounded-[42px] md:rounded-[70px] absolute bottom-0 bg-opacity-60 flex flex-col justify-center items-center gap-8">
                    <img src="/assets/images/you-win-logo.png" alt="hangman logo" className="absolute w-[150px] md:w-[265px] lg:w-[220px] top-[-40px] md:top-[-65px] lg:top-[-56px]" />
                    {/* button 1*/}
                    <div onClick={handlePlayAgain} className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] lg:w-[264px] lg:h-[78px] rounded-[42px] flex justify-center relative bg-opacity-30">
                        <div className="bg-[#3d73fb] w-[188px] h-[50px] md:w-[310px] md:h-[70px] lg:w-[258px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                            <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                                <div className="bg-[#2463FF] w-[180px] h-[45px] md:w-[300px] md:h-[62px] lg:w-[252px] lg:h-[64px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl lg:text-2xl tracking-wider">PLAY AGAIN</div>
                            </div>
                        </div>
                    </div>
                    {/* button 2*/}
                    <Link to="/">
                        <div onClick={handleHomepage} className="text-white bg-black w-[195px] h-[56px] md:w-[320px] md:h-[80px] lg:w-[264px] lg:h-[78px] rounded-[42px] flex justify-center relative bg-opacity-30">
                            <div className="bg-[#FE71FE] w-[188px] h-[50px] md:w-[310px] md:h-[70px] lg:w-[258px] rounded-[42px] absolute top-[1.5px] flex justify-center">
                                <div className="w-full h-full rounded-[42px] flex justify-center items-center relative">
                                    <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[180px] h-[45px] md:w-[300px] md:h-[62px] lg:w-[252px] lg:h-[64px] rounded-[42px] absolute bottom-0 grid place-content-center text-2xl md:text-3xl  lg:text-2xltracking-wider">HOME</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default YouWin
