import {FaDribbbleSquare,
        FaFacebookSquare,
        FaGithubSquare,
        FaInstagram,
        FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return (
            <div className="max-w-[1240px] mx-auto py-16 px-2 grid lg:grid-cols-3 gap-8 text-gray-300">
                <h1 className="text-3xl font-semibold text-[#00df9a]">SofiCode</h1>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum incidunt quibusdam explicabo quae in facere id autem nemo a rem ad voluptate facilis, accusantium cupiditate! Saepe exercitationem distinctio facere eligendi!</p>
                <div className="flex justify-between md:w-[75%] my-6">
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                    <FaInstagram size={30} />
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                        <ul>
                            <li className="py-2 text-sm">Analytics</li>
                            <li className="py-2 text-sm">Marketing</li>
                            <li className="py-2 text-sm">Commerce</li>
                            <li className="py-2 text-sm">Insights</li>
                        </ul>
                    </div>
                    <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                        <ul>
                            <li className="py-2 text-sm">Pricing</li>
                            <li className="py-2 text-sm">Documentation</li>
                            <li className="py-2 text-sm">Guides</li>
                            <li className="py-2 text-sm">Api Status</li>
                        </ul>
                    </div>

                    <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                        <ul>
                            <li className="py-2 text-sm">Carrer</li>
                            <li className="py-2 text-sm">About</li>
                            <li className="py-2 text-sm">Blogs</li>
                            <li className="py-2 text-sm">Jobs</li>
                        </ul>
                    </div>
                    <div>
                    <h6 className="font-medium text-gray-400">Legal</h6>
                        <ul>
                            <li className="py-2 text-sm">Claim</li>
                            <li className="py-2 text-sm">Policy</li>
                            <li className="py-2 text-sm">Terms</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            
    )
}

export default Footer
