import HeroSrc from "../assets/hero.png"
import LogoSrc from "../assets/logo.png"
function Hero() {
    return (
        <div className="bg-cover bg-center h-[97vh] relative" style={{
            backgroundImage: `url(${HeroSrc})`
        }}>

            <img src={LogoSrc} alt="logo" className="w-15 h-15 md:w-20 md:h-20 object-cover absolute left-5 md:left-20 top-5 z-10" />
            <div className="w-full h-full absolute top-0 left-0 bg-black/50">

            </div>

            <div className="absolute top-30 md:top-40 z-50 w-full md:w-1/3 left-5 md:left-20 text-white">
                <h1 className="text-5xl md:text-7xl font-semibold">AI-Powered Robotics Engineering</h1>
                <p className="mt-5 text-xl md:w-full w-[90%]">Automatically generate and verify new robot designs in minutes, not weeks.</p>
                <p className="mt-4 md:mt-6 text-[16px] md:text-[18px] md:w-full w-[90%]">We’re making computational design work for you so you can bring your ideas to life in minutes, not years. </p>
            </div>
        </div>
    )
}

export default Hero