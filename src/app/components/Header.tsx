'use local'

import hero from '@/app/assets/DSC03928.jpg'
import Image from 'next/image'

const hero_image_styling = {
    backgroundImage: `url(${hero.src})`, 
    backgroundSize: `cover`,
    backgroundPosition: `center`,
    height: `60vh`
}

export default function Header() {
    return (
        <><div className="flex justify-center items-center" style={hero_image_styling}>
            <div className="w-64 flex flex-col">
                <Image
                    src="/DSC03850_crop.jpg"
                    className='rounded-2xl'
                    width={500}
                    height={500}
                    alt='A bird'
                />
                <div className="p-3">
                    <h2 className="mt-4 text-xl text-gray-200 font-light text-center">
                        Hi I'm luckyw0lf! <br />
                            Welcome to my website.
                    </h2>
                </div>
            </div>
        </div>
            <nav className="bg-gradient-to-r from-green-400 to-blue-500 left-0 w-full z-50 shadow-md">
                <ul className="flex justify-center space-x-8 p-4 text-white">
                    <li>
                        <a href="/" className="px-4 py-2 rounded-lg bg-white text-green-500 font-semibold hover:bg-green-600 hover:text-white shadow-md transform hover:scale-105 transition-all duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/links.html"
                            className="px-4 py-2 rounded-lg bg-white text-blue-500 font-semibold hover:bg-blue-600 hover:text-white shadow-md transform hover:scale-105 transition-all duration-300"
                        >
                            Links
                        </a>
                    </li>
                    <li>
                        <a
                            href="/wishlist.html"
                            className="px-4 py-2 rounded-lg bg-white text-purple-500 font-semibold hover:bg-purple-600 hover:text-white shadow-md transform hover:scale-105 transition-all duration-300"
                        >
                            Wishlist
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}