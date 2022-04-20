import Laptop from '../assets/laptop.jpeg'


const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
                <div className="flex flex-col justify-center">
                    <p className="uppercase md:text-xl font-bold text-[#00df9a]">data analytics dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ipsa recusandae laborum? Assumenda quasi et voluptatum tenetur perferendis animi neque quae, cum magni sint debitis numquam veniam culpa nemo odio.</p>
                    <button className="btn mx-auto md:mx-0 text-[#00df9a]">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics
