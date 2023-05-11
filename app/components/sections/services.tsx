import Image from "next/image";

export default function Services(){
    return (
        <>
            <section className="bg-[#323232] py-20 " id="services">
                <div className=" mx-auto px-6 py-1 0">
                    <h2 className="text-6xl font-bold  py-20 text-white">SERVICES</h2>
                    <div className="flex mx-auto flex-col md:flex-row justify-center">
                        <div className="w-full h-auto  px-2 mb-4 text-center">
                            <div className="flex flex-col justify-between h-full bg-[#323232] rounded shadow py-2">
                                <p className="text-gray-100 text-base px-6 mb-5">
                                    <Image
                                        className="w-full rounded-lg transform transition duration-500 hover:scale-110"
                                        src="/img/cam.jpg"
                                        alt="Logo"
                                        width={100}
                                        height={200}
                                        priority
                                    />
                                </p>
                                <p className="text-gray-500 text-2xl font-bold px-6">Cinematography</p>
                            </div>
                        </div>
                        <div className="w-full h-auto  px-2 mb-4 text-center">
                            <div className="flex flex-col justify-between h-full bg-[#323232] rounded shadow py-2">
                                <p className="text-gray-100 text-base px-6 mb-5">
                                    <Image
                                        className="w-full rounded-lg transform transition duration-500 hover:scale-110"
                                        src="/img/set.jpg"
                                        alt="Logo"
                                        width={100}
                                        height={200}
                                        priority
                                    />
                                </p>
                                <p className="text-gray-500 text-2xl font-bold px-6">Video production</p>
                            </div>
                        </div>
                        <div className="w-full h-auto  px-2 mb-4 text-center">
                            <div className="flex flex-col justify-between h-full bg-[#323232] rounded shadow py-2">
                                <p className="text-gray-100 text-base px-6 mb-5">
                                    <Image
                                        className="w-full rounded-lg transform transition duration-500 hover:scale-110"
                                        src="/img/corporate.jpg"
                                        alt="Logo"
                                        width={100}
                                        height={200}
                                        priority
                                    />
                                </p>
                                <p className="text-gray-500 text-2xl font-bold  px-6">Corporate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </>
    )
}
