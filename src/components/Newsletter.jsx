

const Newsletter = () => {
    return (
        <div className="w-full text-white py-16 px-4">
           <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Wants tips & tricks to optimize your flow?</h1>
                    <p className='text-sm'>Sign Up to our newsletter and stay up to date</p>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row items-center justify-center w-full">
                        <input className="p-2 flex w-full rounded-md text-xl" type="text" placeholder="Enter Email"/>
                        <button className="ml-2 btn my-4 md:my-0 bg-[#00df9a] whitespace-nowrap text-black">Notify Me</button>
                    </div>
                    <p>We Care about the protection of your data. <span className="text-[#00df9a]">Read our privacy policy.</span></p>
                </div>
           </div>
        </div>
    )
}

export default Newsletter
