import React, { useState } from 'react';
import {FaChevronDown } from "react-icons/fa";
import { FaChevronUp} from "react-icons/fa"


type TogglePanelProps = {
    title:string,

    children : React.ReactNode
}

const TogglePanel = ({ title, children }:TogglePanelProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="p-10 dark:bg-[#181818] rounded-md ">
            <h2 onClick={togglePanel} className="cursor-pointer text-2xl font-bold mb-5 text-left text-white flex flex-row justify-between">

                <span>{title}



                </span>  {isOpen ?  <FaChevronUp/>: <FaChevronDown/>}

            </h2>
            {isOpen && (
                <div className="mt-4 p-4">
                    {children}
                </div>
            )}
        </div>
    );
};

export default TogglePanel;
