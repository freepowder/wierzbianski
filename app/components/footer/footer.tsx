import {FaLinkedin, FaVimeoSquare, FaYoutube} from "react-icons/fa";

export default function Footer(){
    return( <footer className="bg-blend-darken-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="mx-auto text-center flex flex-row justify-center gap-6 p-6">
                    <FaYoutube className={"text-4xl"}/>
                    <FaLinkedin className={"text-4xl"}/>
                    <FaVimeoSquare className={"text-4xl"}/>
                </div>
                <div className="text-sm text-gray-600 font-semibold py-1">
                    Copyright © 2023 <strong>TOMASZ WIERZBIANSKI</strong>
                </div>
            </div>
        </div>
    </footer>)
}
