"use client";

import { MdOutlineMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
// import { useTheme } from "@/app/context/ThemeContext";

const NavBar = () => {
    // const { darkMode, actions } = useTheme();

    return (
        <div className="px-2 md:px-10 lg:px-20 xl:px-40 navbar w-full flex justify-between items-center fixed top-0">

            {/* Logo */}
            <div className="navbar-start">
                <a href='/' className="link">
                    <img src="/images/brand/banner.png" alt="Logo" className="max-w-[115px] sm:max-w-[175px]" />
                </a>
            </div>

            {/* Theme Swap */}
            {/* <div role="button" onClick={actions.toggleTheme} className="btn btn-ghost btn-circle">
                {darkMode ?
                    <MdOutlineLightMode className="text-lg sm:text-xl" />
                    :
                    <MdOutlineDarkMode className="text-lg sm:text-xl" />
                }
            </div> */}


            {/* Menu */}
            <div className="navbar-end">
                <div>
                    <span className="text-xs sm:text-base uppercase font-syne">Menu</span>
                </div>
                <div role="button" className="btn btn-ghost btn-circle">
                    <MdOutlineMenu className="text-lg sm:text-xl" />
                </div>
            </div>
        </div>
    )
}

export default NavBar