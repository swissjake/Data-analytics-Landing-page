import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className="w-full bg-white py-[10rem] px-4">
           <div className="max-w-[1240px] grid md:grid-cols-3 gap-8 fi">
               <div className="w-full flex-col shadow-xl rounded-lg my-4 p-4 hover:scale-105 ease-out duration-300">
                 <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
                  <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center divide-y divide-gray-400">
                        <p className="py-2 mx-4 mt-6">500GB storage</p>
                        <p className="py-2 mx-4">1 Granted User</p>
                        <p className="py-2 mx-4">Send up to 2GB</p>
                    </div>
                    <div className="flex justify-center">
                    <button className="md:w-[200px] w-[150px] mt-2 py-3 px-4 md:px-8 bg-[#00df9a] rounded-xl font-bold text-black text-lg active:scale-95 ease-out duration-200 ">Start Trial</button>
                    </div>
               </div>

               <div className="w-full flex-col bg-gray-100 shadow-xl rounded-lg md:my-0 my-8 p-4 hover:scale-105 ease-out duration-300">
                 <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Double} alt="/" />
                  <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center divide-y divide-gray-400">
                        <p className="py-2 mx-4 mt-6">500GB storage</p>
                        <p className="py-2 mx-4">1 Granted User</p>
                        <p className="py-2 mx-4">Send up to 2GB</p>
                    </div>
                    <div className="flex justify-center">
                    <button className="md:w-[200px] w-[150px] mt-2 py-3 px-4 md:px-8 bg-[#000300] rounded-xl font-bold text-[#00df9a] text-lg active:scale-95 ease-out duration-200 ">Start Trial</button>
                    </div>
               </div>

               <div className="w-full flex-col shadow-xl rounded-lg my-4 p-4 hover:scale-105 ease-out duration-300">
                 <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="/" />
                  <h2 className="text-2xl text-center font-bold py-8">Single User</h2>
                    <p className="text-center text-4xl font-bold">$149</p>
                    <div className="text-center divide-y divide-gray-400">
                        <p className="py-2 mx-4 mt-6">500GB storage</p>
                        <p className="py-2 mx-4">1 Granted User</p>
                        <p className="py-2 mx-4">Send up to 2GB</p>
                    </div>
                    <div className="flex justify-center">
                    <button className="md:w-[200px] w-[150px] mt-2 py-3 px-4 md:px-8 bg-[#00df9a] rounded-xl font-bold text-black text-lg active:scale-95 ease-out duration-200 ">Start Trial</button>
                    </div>
               </div>
           </div>
        </div>
    )
}

export default Cards
