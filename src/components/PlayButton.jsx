const PlayButton = () => {
  return (
    <div className="bg-[#000000] w-[160px] h-[160px] rounded-full flex justify-center relative bg-opacity-30">
      <div className="bg-[#FE71FE] w-[152px] h-[152px] rounded-full flex justify-center absolute top-0">
        <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] w-[142px] h-[142px] rounded-full absolute top-0 grid place-content-center">
            <img src="/assets/images/icon-play.svg" alt="play icon"/>
        </div>
      </div>
    </div>
  )
}

export default PlayButton

