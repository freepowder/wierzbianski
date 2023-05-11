

type ContactProps= {
    phone: string,
    email: string,
}

export default function Contact({phone,email}:ContactProps){
    return(
<>
    <section className="py-20" id="contact">
        <div className="bg-[#181818]  mx-auto px-6 text-center">
            <h2 className="text-6xl font-bold  py-20 text-white">CONTACT</h2>
            <h3 className="my-4 text-2xl text-white">Available in London area and abroad.</h3>
            <div className={"flex flex-col md:flex-row justify-center gap-6"}>
                <div className={"md:py-20 pt-20 md:ml-6 "}>
                    <a href="tel:+44 7881 817844"
                       className="bg-white px-12 text-black font-bold rounded-full mt-6 py-4 md:px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                        {phone}
                    </a>
                </div>
                <div className={"py-20"}>
                    <a href="mailto:tombell@bellotheque.com"
                       className="bg-white text-black font-bold rounded-full mt-6 py-4 px-8 shadow-lg  tracking-wider hover:border-red hover:text-white hover:bg-red-600">
                        {email}
                    </a>
                </div>
            </div>

        </div>
    </section>
</>)
}
