import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

const Navbar = ({active}) => {

    const router = useRouter();

    const goTo = value => () => router.push(value);

    const blurStyles = {
        backdropFilter: "blur(10px)",
        boxShadow: "inset 0 0 100px white"
    };

    const btnClass = type => "inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition duration-300 ease-in-out "
        + (active === type ? "bg-indigo-600 text-white" : "bg-gray-100 hover:bg-gray-200");

    return (
        <nav className="fixed w-full z-10 py-3" style={blurStyles}>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                        <Image src="/logo.png" width={32} height={32}/>
                    </a>
                    <div className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <button onClick={goTo("/new")} className={btnClass("new")}>
                            New
                        </button>
                        <button onClick={goTo("/top")} className={btnClass("top") + " mx-4"}>
                            Top
                        </button>
                        <button onClick={goTo("/best")} className={btnClass("best")}>
                            Best
                        </button>
                    </div>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
