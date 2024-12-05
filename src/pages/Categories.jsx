import ReturnButton from "../components/ReturnButton"

const Categories = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div class="absolute inset-0 bg-black/50"></div>
      <div className="w-full absolute top-[30px] md:top-[78px] lg:top-[50px] flex justify-between px-6 md:px-12 lg:px-24">
        <ReturnButton />
        <img src="/assets/images/pick-category-icon.png" alt="Pic caterogy icon" className="md:w-[343px]" />
        <div className="hidden md:block"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[270px] h-[60px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">MOVIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[276px] h-[65px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">TV SHOWS</div>
        </div>
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[276px] h-[65px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">COUNTRIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[276px] h-[65px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">CAPITAL CITIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[276px] h-[65px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">ANIMALS</div>
        </div>
        <div className="bg-[#3d73fb] w-[276px] h-[65px] md:w-[260px] md:h-[160px] lg:w-[208px] lg:h-[108px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[276px] h-[65px] md:w-[250px] md:h-[150px] lg:w-[200px] lg:h-[100px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[36px] lg:text-[28px] tracking-wider">SPORTS</div>
        </div>
      </div>
    </div>
  )
}

export default Categories
