import { useEffect, useState } from "react";
import Paused from "../components/Paused";
import YouLose from "../components/YouLose";
import YouWin from "../components/YouWin";
import letters from "../data/letters";
import PropagateLoader from "react-spinners/PropagateLoader";

const GamePage = ({ category }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [health, setHealth] = useState(100);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isWon, setIsWon] = useState(false);
  const [isLose, setIsLose] = useState(false);

  const [movie, setMovie] = useState([]);
  const [show, setShow] = useState([]);
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState([]);
  const [artist, setArtist] = useState([]);
  const [anime, setAnime] = useState([]);

  const [cat, setCat] = useState("");
  const [catState, setCatState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  //pauses the game
  const handleIsPaused = () => {
    setIsPaused(true);
  };

  //letter clicked
  const handleClickedLetter = (id) => {
    const clickedLetterObject = letters.find((letter) => letter.id === id);
    clickedLetterObject.opacity = true;
    const clickedLetter = clickedLetterObject.letter;

    if (catState.includes(clickedLetter)) {
        setGuessedLetters(prev => {
            const updatedGuessedLetters = [...new Set([...prev, clickedLetter])];
            
            // Check win condition
            const filteredMovie = catState.filter(char => char.match(/[A-Z]/));
            const hasWon = filteredMovie.every(letter => updatedGuessedLetters.includes(letter));
            if (hasWon) {
              setIsWon(true); // Mark as won
            }
      
            return updatedGuessedLetters;
        });
    } else {
        setHealth((prevHealth) => Math.max(prevHealth - 10, 0));
    };
  };

  //Determing when a player loses
  useEffect(() => {
    if (health === 0) {
        setIsLose(true);
    }
  }, [health]);

  //fetch movies
  const getMovie = async () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const randomPageIndex = Math.floor(Math.random() * pages.length);
    const page = pages[randomPageIndex];
    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=52d04f0ad27d273868996d5c327a9b17&page=${page}`);
        const movies = await res.json();

        const refinedMovies = movies.results.filter((movie) => {
            const movieTitle = movie.title;

            if (movieTitle.split(" ").length < 2) {
                if (movieTitle.length < 10) {
                    if (movieTitle.split("").every((char) => isNaN(char))){
                        return movieTitle
                    }
                }
            }
        });

        const refinedMoviesTitles = refinedMovies.map((refinedMovie) => refinedMovie.title);

        if (refinedMoviesTitles.length === 0) {
            return getMovie();
        }

        const singlemovie = refinedMoviesTitles[Math.floor(Math.random() * refinedMoviesTitles.length)].toUpperCase().split("");
        setMovie(singlemovie);
        
    } catch (error) {
        console.error(`Error: ${error}`);
    } finally {
        setIsLoading(true);
    }
  };


 //fetch tv shows
 const getShows = async () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    const randomPageIndex = Math.floor(Math.random() * pages.length);
    const page = pages[randomPageIndex];

    try {
        const res = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=52d04f0ad27d273868996d5c327a9b17`);
        const shows = await res.json();

        const refinedShows = shows.results.filter((show) => {
            const showName = show.name;

            if (showName.split(" ").length < 2) {
                if (showName.length < 10) {
                    if (showName.split("").every((char) => isNaN(char))){
                        return showName
                    }
                }
            }
        });

        const refinedShowNames = refinedShows.map((refinedShow) => refinedShow.name);

        if (refinedShowNames.length === 0) {
            return getShows();
        }

        const singleShow = refinedShowNames[Math.floor(Math.random() * refinedShowNames.length)].toUpperCase().split("");
        setShow(singleShow);

    } catch (error){
        console.error(`Error: ${error}`);
    } finally {
        setIsLoading(true);
    }
 };


 //fetch countries
 const getCountries = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
    
        const countries = data.map(country => ({name: country.name.common}));

        const refinedCountries = countries.filter((country) => {
            const countryName = country.name;

            if (countryName.split(" ").length < 2) {
                if (countryName.length < 10) {
                    return countryName
                }
            }
        });

        const refinedCountryNames = refinedCountries.map((refinedCountry) => refinedCountry.name);

        if (refinedCountryNames.length === 0) {
            return getCountries();
        }

        const singleCountry = refinedCountryNames[Math.floor(Math.random() * refinedCountryNames.length)].toUpperCase().split("");
        setCountry(singleCountry);

      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(true);
    }
 };


 //fetch capital cities
 const getCities = async () => {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
    
        const cities = data.map((country) => ({name: country.capital ? country.capital[0] : "No Capital"}));

        const refinedCities = cities.filter((city) => {
            const cityName = city.name;

            if (cityName.split(" ").length < 2) {
                if (cityName.length < 10) {
                    return cityName
                }
            }
        });

        const refinedCityNames = refinedCities.map((refinedCity) => refinedCity.name);

        if (refinedCityNames.length === 0) {
            return getCities();
        }

        const singleCity = refinedCityNames[Math.floor(Math.random() * refinedCityNames.length)].toUpperCase().split("");
        setCity(singleCity);

      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsLoading(true);
    }
 };

 //fetch artist
 const getArtist = async () => {
    try {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)].letter;
      const startingLetter = `${randomLetter}`;
      const url = `https://musicbrainz.org/ws/2/artist/?query=artist:${encodeURIComponent(startingLetter)}*&fmt=json`;

      // Fetch data from MusicBrainz API
      const response = await fetch(url);
      const data = await response.json();
    
      if (data.artists && data.artists.length > 0) {
        // Randomly select an artist from the list
        const randomIndex = Math.floor(Math.random() * data.artists.length);
        const randomArtist = data.artists[randomIndex];
        
        // Display artist name and other details
        const artistName = { name: randomArtist.name };
        const artistFirstName = artistName.name.split(" ")[0].toUpperCase().split("")

        setArtist(artistFirstName);

      } else {
        console.log('No artists found');
      }
    } catch (error) {
      console.error('Error fetching artist:', error);
    } finally {
        setIsLoading(true);
    }
  };

 //fetch anime
 const getAnime = async () => {
    const randomPage = Math.floor(Math.random() * 100) + 1;
    const query = `
      query {
        Page(page: ${randomPage}, perPage: 50) {
          media(type: ANIME) {
            id
            title {
              english
              native
            }
            description
            coverImage {
              large
            }
          }
        }
      }
    `;

    try {
      const response = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      const titles = data.data.Page.media.map((anime) => ({
        english: anime.title.english || "No English Title",
        native: anime.title.native || "No Native Title",
      }));

      const singleAnime = titles.filter(title => title.english !== "No English Title" && title.english.split(" ").length < 2);

      const singleAnimeTitle = singleAnime[Math.floor(Math.random() * singleAnime.length)].english.toUpperCase().split("");

      setAnime(singleAnimeTitle);
    } catch (error) {
      console.error('Error fetching artist:', error);
    } finally {
        setIsLoading(true);
    }
 };

 //restarting the game and playing again
 const handlePlayAgain = () => {
    setIsPaused(false);
    setHealth(100);
    setMovie([]);
    setGuessedLetters([]);
    setIsWon(false);
    setIsLose(false);
    setCatState([]);
    
    letters.forEach((letter) => letter.opacity = false);

    if (category === "MOVIES") {
        getMovie();
    } else if (category === "TV SHOWS") {
        getShows();
    } else if (category === "COUNTRIES") {
        getCountries();
    } else if (category === "CAPITAL CITIES") {
        getCities();
    } else if (category === "CELEBRITIES") {
        getArtist();
    } else if (category === "ANIME") {
        getAnime();
    }
  };

  //Clear state and taking player back to homepage
  const handleHomepage = () => {
    setIsPaused(false);
    setHealth(100);
    setMovie([]);
    setGuessedLetters([]);
    setIsWon(false);
    setIsLose(false);
    setCatState([])
    
    letters.forEach((letter) => letter.opacity = false);
  };

 
  //fetching data
  useEffect(() => {
    if (category === "MOVIES"){
        getMovie();
    } else if (category === "TV SHOWS") {
        getShows();
    } else if (category === "COUNTRIES") {
        getCountries();
    } else if (category === "CAPITAL CITIES") {
        getCities();
    } else if (category === "CELEBRITIES") {
        getArtist();
    } else if (category === "ANIME") {
        getAnime();
    }
  }, [category]);


 //Check category
 useEffect(() => {
    if (category === "MOVIES") {
        setCat("MOVIES");
        setCatState(movie);
     } else if (category === "TV SHOWS") {
        setCat("TV SHOWS");
        setCatState(show);
     } else if (category === "COUNTRIES") {
        setCat("COUNTRIES");
        setCatState(country);
     } else if (category === "CAPITAL CITIES") {
        setCat("CAPITAL CITIES");
        setCatState(city);
     } else if (category === "CELEBRITIES") {
        setCat("CELEBRITIES");
        setCatState(artist);
     } else if (category === "ANIME") {
        setCat("ANIME");
        setCatState(anime);
     }
 }, [category, movie, show, country, city, artist, anime]);

  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center h-screen relative flex flex-col items-center">
      {!isPaused && <div className="absolute inset-0 bg-black/50"></div>}
      {(isPaused || isWon || isLose) && <div className="absolute inset-0 bg-black/60 z-20"></div>}
      {isPaused && <Paused setIsPaused={setIsPaused} handleHomepage={handleHomepage} />}
      {isWon && <YouWin handlePlayAgain={handlePlayAgain} handleHomepage={handleHomepage} />}
      {isLose && <YouLose word={catState} category={cat} handlePlayAgain={handlePlayAgain} handleHomepage={handleHomepage} />}

      {/* Head */}
      <div className="absolute top-[30px] md:top-[78px] lg:top-[50px] px-6 md:px-12 flex justify-between w-full">
        <div className="flex items-center gap-4 md:gap-8">
            <div onClick={handleIsPaused} className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[40px] h-[40px] md:w-[64px] md:h-[64px] rounded-full flex justify-center items-center relative cursor-pointer">
                <img src="/assets/images/icon-menu.svg" alt="back icon" className="w-[17px] md:w-[25px]" />
            </div>
            <div className="text-white text-[26px] md:text-[48px] tracking-wider">{cat}</div>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
            <div className="w-[57px] h-[16px] md:w-[160px] md:h-[31px] bg-white rounded-3xl flex items-center">
                <div style={{ width: `${health}%`}} className={`${health <= 30 ? "bg-red-500" : "bg-[#261676]"} h-[8px] md:w-[40%] md:h-[13px] rounded-3xl mx-1 md:mx-3`}></div>
            </div>
            <img src="/assets/images/icon-heart.svg" alt="Heart icon" className="w-[26px] md:w-[53px]"/>
        </div>
      </div>

      {/* Guesses */}
      <div className="flex items-center flex-col gap-2 md:gap-6 w-full px-6 md:px-12 md:mt-[100px] lg:mt-[20px]">
        <div className="mt-40 grid gap-2 justify-center" style={{ gridTemplateColumns: `repeat(${catState.length}, minmax(0, 1fr))` }}>
            { isLoading ? 
              <PropagateLoader color="#2f1e83" size={30} /> :
                catState.map((letter, index) => {
                    return (
                        <div key={index} className={`w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] ${guessedLetters.includes(letter) ? "bg-[#3d73fb]" : "bg-[#2f1e83]"} flex justify-center rounded-xl md:rounded-[24px] lg:rounded-[18px] relative`}>
                            <div className={`w-[25px] h-[41px] md:w-[58px] md:h-[78px] lg:w-[45px] lg:h-[62px] ${guessedLetters.includes(letter) ? "bg-[#2463FF]" : "bg-[#261676]"} rounded-xl md:rounded-[24px] lg:rounded-[18px] text-white grid place-content-center text-[28px] md:text-[48px] lg:text-[36px] absolute bottom-0`}>{guessedLetters.includes(letter) ? letter : ""}</div>
                        </div>
                    )
                })
            }
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
                        <div key={id} onClick={() => handleClickedLetter(id)} className={`w-[29px] h-[45px] md:w-[64px] md:h-[84px] lg:w-[52px] lg:h-[67px] bg-white text-[#261676] text-[24px] md:text-[42px] lg:text-[36px] rounded-lg md:rounded-[20px] grid place-content-center cursor-pointer ${opacity ? "opacity-40 pointer-events-none" : ""}`}>{letter}</div>
                    ))
                }
            </div>
        ))}
      </div>
    </div>
  );
};

export default GamePage;


