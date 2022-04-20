import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
const Hero = () => {
    return (
        <div className="text-white">
            <div className="w-full max-w-[800px] mt-[-96px] h-screen mx-auto flex-col flex items-center justify-center">
            <p className="text-[#00df9a] font-bold p-2 uppercase">Growing with data analytics</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data.</h1>

            <div className="flex justify-center items-center">
            <p className="text-xl md:text-5xl sm:text-4xl font-bold pb-4">Fast, flexible financing for  </p>
            <Typed
            className="text-xl md:text-5xl sm:text-4xl font-bold pb-4 md:pl-4 pl-2"
                strings={[
                    'BTB',
                    'BTC',
                    'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop >
                </Typed>
            </div>
            <p className="text-center text-xl md:text-2xl font-bold text-gray-400">Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
            <button className="button">Get Started</button>
            </div>
            
        </div>
    )
}

export default Hero
