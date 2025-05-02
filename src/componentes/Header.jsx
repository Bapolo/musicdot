import Logo from "./Logo"
import logo from "../../img/musicdot-logo-light.svg"
import Nav from "./Nav"

function Header()
{
    return (
        <header className="bg-blue-900 flex flex-col items-center gap-6 justify-center pt-6 md:flex-row md:py-2 md:px-20">
            <Logo src={logo} css="w-50 p-0"/>
            <Nav />
        </header>
    )
}

export default Header