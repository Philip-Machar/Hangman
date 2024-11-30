import ReturnButton from "../components/ReturnButton"

const Categories = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div class="absolute inset-0 bg-black/20"></div>
      <div className="w-full absolute top-[40px] flex justify-between px-6">
        <ReturnButton />
        <img src="/assets/images/pick-category-icon.png" alt="Pic caterogy icon" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">MOVIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">TV SHOWS</div>
        </div>
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">COUNTRIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">CAPITAL CITIES</div>
        </div>
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">ANIMALS</div>
        </div>
        <div className="bg-[#3d73fb] w-[324px] h-[77px] relative flex justify-center rounded-3xl">
            <div className="bg-[#2463FF] w-[320px] h-[72px] absolute bottom-0 rounded-3xl grid place-content-center text-white text-2xl">SPORTS</div>
        </div>
      </div>
    </div>
  )
}

export default Categories
