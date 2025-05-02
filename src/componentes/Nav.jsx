import BotaoMatricule from "./BotaoMatricule"


function Nav()
{
    return (
        <nav className="bg-sky-950 w-full md:bg-blue-900">
            <ul className="text-white text-xl flex gap-6 justify-around py-3 md:justify-end md:items-center md:text-sm">
                <li >Contacto</li>
                <li>Entrar</li>
                <BotaoMatricule css="md:bg-red-400 md:py-1 md:px-2 md:rounded-sm" />
            </ul>
        </nav>
    )
}

export default Nav