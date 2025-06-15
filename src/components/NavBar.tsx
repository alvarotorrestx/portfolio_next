import { MdOutlineMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
    return (
        <div className="navbar w-full flex justify-between items-center">

            {/* Logo */}
            <div className="navbar-start">
                <a href='/' className="link">
                    <img src="/images/brand/banner.png" alt="Logo" className="max-w-[115px] sm:max-w-[175px]"/>
                </a>
            </div>

            {/* Theme Swap */}
            <div role="button" className="btn btn-ghost btn-circle">
                <MdOutlineLightMode className="text-lg sm:text-xl" />
            </div>


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