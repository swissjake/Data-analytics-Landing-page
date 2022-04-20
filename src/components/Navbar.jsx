import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [click, setClick] = useState(true)

    const handleToggle = () =>{
        setClick(prevClick => !prevClick)
    }

    return (
        <div className="text-white flex items-center max-w-[1240px] mx-auto justify-between p-4">
            <h1 className="text-3xl font-semibold text-[#00df9a]">SofiCode.</h1>
            <ul className="hidden md:inline-flex space-x-4 text-lg">
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
            <div className="block z-50 md:hidden transition duration-100 ease-out" onClick={handleToggle}>
                {click ? <AiOutlineMenu  size={20}/> : <AiOutlineClose size={20}/>}
            </div>

            <div className={!click ? 'fixed left-0 top-0 w-[100%] z-20 h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : "fixed left-[-100%]"}>
            <h1 className="text-3xl p-4 font-semibold text-[#00df9a]">SofiCode.</h1>
                <ul className="pt-4 uppercase divide-y divide-gray-700">
                    <li className="py-4 px-4">Home</li>
                    <li className="py-4 px-4">Company</li>
                    <li className="py-4 px-4">Resources</li>
                    <li className="py-4 px-4">About</li>
                    <li className="py-4 px-4">Contact</li>
                
                </ul>
            </div>

        </div>
    )
}

export default Navbar
