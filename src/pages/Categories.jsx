import ReturnButton from "../components/ReturnButton"

const Categories = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div class="absolute inset-0 bg-black/50"></div>
      <div className="w-full absolute top-[40px] md:top-[78px] flex justify-between px-6 md:px-12">
        <ReturnButton />
        <img src="/assets/images/pick-category-icon.png" alt="Pic caterogy icon" className="md:w-[343px]" />
        <div className="hidden md:block"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-20">
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">MOVIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">TV SHOWS</div>
        </div>
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">COUNTRIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">CAPITAL CITIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">ANIMALS</div>
        </div>
        <div className="bg-[#3d73fb] w-[330px] h-[77px] md:w-[324px] md:h-[182px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[326px] h-[72px] md:w-[316px] md:h-[173px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl md:text-[42px] tracking-wider">SPORTS</div>
        </div>
      </div>
    </div>
  )
}

export default Categories
