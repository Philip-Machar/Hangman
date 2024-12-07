import { useEffect, useState } from "react";
import Paused from "../components/Paused";
import YouLose from "../components/YouLose";
import YouWin from "../components/YouWin";
import letters from "../data/letters";

const GamePage = ({ category }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [health, setHealth] = useState(100);
  const [movie, setMovie] = useState([]);
  
  //pauses the game
  const handleIsPaused = () => {
    setIsPaused(true);
  };

 //fetching data based on category chosen
 useEffect(() => {
    if (category === "MOVIES"){
        const getMovie = async () => {
            const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
            const randomPageIndex = Math.floor(Math.random() * pages.length);
            const page = pages[randomPageIndex];
            try {
                const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=52d04f0ad27d273868996d5c327a9b17&page=${page}`);
                const movies = await res.json();

                const refinedMovies = movies.results.filter((movie) => {
                    const movieTitle = movie.title;

                    if (movieTitle.split(" ").length < 2) {
                        if (movieTitle.length < 10) {
                            return movieTitle
                        }
                    }
                });

                const refinedMoviesTitles = refinedMovies.map((refinedMovie) => refinedMovie.title);
                const singlemovie = refinedMoviesTitles[Math.floor(Math.random() * refinedMoviesTitles.length)].split("");
                setMovie(singlemovie);

                console.log(singlemovie);
            } catch (error) {
                console.error(`Error: ${error}`);
            };
        };
        getMovie();
    };
 }, []);

  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center h-screen relative flex flex-col items-center">
      {!isPaused && <div className="absolute inset-0 bg-black/50"></div>}
      {isPaused && <div className="absolute inset-0 bg-black/60 z-20"></div>}
      {isPaused && <Paused setIsPaused={setIsPaused} />}
      {/* <YouWin /> */}
      {/* <YouLose /> */}
      {/* Head */}
      <div className="absolute top-[30px] md:top-[78px] lg:top-[50px] px-6 md:px-12 flex justify-between w-full">
        <div className="flex items-center gap-4 md:gap-8">
            <div onClick={handleIsPaused} className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center relative">
                <img src="/assets/images/icon-menu.svg" alt="back icon" className="w-[17px] md:w-[25px]" />
            </div>
            <div className="text-white text-[26px] md:text-[48px] tracking-wider">{category}</div>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
            <div className="w-[57px] h-[16px] md:w-[160px] md:h-[31px] bg-white rounded-3xl flex items-center">
                <div style={{ width: `${health}%`}} className="bg-[#261676] h-[8px] md:w-[40%] md:h-[13px] rounded-3xl mx-1 md:mx-3"></div>
            </div>
            <img src="/assets/images/icon-heart.svg" alt="Heart icon" className="w-[26px] md:w-[53px]"/>
        </div>
      </div>
      {/* Guesses */}
      <div className="flex items-center flex-col gap-2 md:gap-6 w-full px-6 md:px-12 md:mt-[100px] lg:mt-[20px]">
        <div className="mt-40 grid gap-2 justify-center" style={{ gridTemplateColumns: `repeat(${movie.length}, minmax(0, 1fr))` }}>
            {
                movie.map((letter, index) => {
                    return (
                        <div key={index} className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                            <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#261676] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0"></div>
                        </div>
                    )
                })
            }
            {/* <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#2463FF] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0">U</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#2463FF] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0">N</div> 
            </div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#2463FF] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0">I</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#261676] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0"></div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#3d73fb] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#2463FF] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0">D</div>
            </div>
            <div className="w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-[#2f1e83] flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative">
                <div className="w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] bg-[#261676] rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0"></div>
            </div> */}
        </div>
      </div>
      {/* Letters */}
      <div className="w-full md:w-auto px-6 md:px-12 mt-[120px] lg:mt-[80px] grid gap-4 justify-center">
        {/* Dynamically create rows */}
        {[...Array(3)].map((_, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-9 gap-2 md:gap-4 z-10 justify-center ${rowIndex === 2 ? "translate-x-4 md:translate-x-9" : ""}`}>
                {/* Dynamically populate letters */}
                {
                    letters.slice(rowIndex * 9, rowIndex * 9 + 9).map(({ id, letter, opacity }) => (
                        <div key={id} className={`w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-white text-[#261676] text-[24px] md:text-[42px] lg:text-[36px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer ${opacity ? "opacity-40" : ""}`}>{letter}</div>
                    ))
                }
            </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;

