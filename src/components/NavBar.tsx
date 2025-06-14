type Props = {}

const NavBar = (props: Props) => {
    return (
        <div className="navbar w-full flex justify-between items-center">

            {/* Logo */}
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>

            {/* Theme Swap */}
            <div role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>


            {/* Menu */}
            <div className="navbar-end">
                <div>
                    <span className="text-md uppercase font-syne">Menu</span>
                </div>
                <div role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
            </div>
        </div>
    )
}

export default NavBar