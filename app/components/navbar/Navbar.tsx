
export default function Navbar() {

    return(
        <nav className=" fixed bg-black z-20 top-0 left-0 w-full flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0  md:text-right mr-6">
                <span className="font-semibold text-xl">
                    <a href="/">
                        <div className="text-lg text-white">
                          <span className="font-thin">TOMASZ</span>
                          <span className="font-bold">WIERZBIANSKI</span>
                        </div>
                    </a>
                </span>
            </div>

            <div id="nav-content"
                 className="w-full text-white flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 md:text-right">
                <div className="text-sm lg:flex-grow">
                    <a href="/"
                       className="block uppercase mt-1 lg:inline-block lg:mt-0 text-dark-200 hover:text-red-600 mr-4">Home</a>
                    <a href="/#services"
                       className="block mt-4 uppercase lg:inline-block lg:mt-0 text-dark-200 hover:text-red-600 mr-4">Services</a>
                    <a href="/#about"
                       className="block mt-4 uppercase lg:inline-block lg:mt-0 text-dark-200 hover:text-red-600 mr-4">About</a>
                    <a href="/#contact"
                       className="block mt-4 uppercase  lg:inline-block lg:mt-0 text-dark-200 hover:text-red-600 mr-4">Contact</a>

                </div>
            </div>
        </nav>
    )
}
