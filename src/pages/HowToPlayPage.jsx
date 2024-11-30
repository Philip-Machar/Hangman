const HowToPlayPage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] bg-cover bg-center h-screen grid place-content-center relative">
      <div className="w-full absolute top-[16px] flex justify-between">
        <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[60px] h-[60px] rounded-full flex justify-center relative">
            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[50px] h-[50px] rounded-full absolute top-0 flex justify-center">
                <img src="/assets/images/icon-back.svg" width="30px" alt="back icon" />
            </div>
        </div>
        <img src="/assets/images/icon-how-to-play.png" alt="How to play heading" />
      </div>
      <div>
        {/* card
        card
        card */}
      </div>
    </div>
  )
}

export default HowToPlayPage
