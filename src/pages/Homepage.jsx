import Intro from "../components/Intro"

const Homepage = () => {
  return (
    <div className="bg-[url(/assets/images/background-mobile.svg)] md:bg-[url(/assets/images/background-tablet.svg)] lg:bg-[url(/assets/images/background-desktop.svg)] bg-cover bg-center h-screen grid place-content-center">
      <Intro />
    </div>
  )
}

export default Homepage
