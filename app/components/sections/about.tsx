import Image from "next/image";

type AboutProps={
    about:string
}
export default function About({about}:AboutProps){
    return(
        <>
        <section className="container mx-auto px-6 relative z-10" id="about">
            <h2 className="text-6xl font-bold my-20  text-white">ABOUT</h2>
            <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2 pr-10">
                    <h4 className="text-3xl text-gray-300 font-bold mb-3">Tomasz Wierzbianski</h4>
                    <p className="text-gray-200 mb-8">{about}</p>
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        className="w-full rounded-lg transform transition duration-500 hover:scale-130"
                        src="/img/about.jpg"
                        alt="Logo"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </section>
        </>)
}
