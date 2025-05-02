import Subtitulo from "./Subtitulo"


function FormFooter({css})
{
    return (
        <form onSubmit={(e) => e.preventDefault()} className={css}>
            <Subtitulo texto="Receba novidades e lançamentos" css="uppercase" />

            <div className="p-0 border-2 border-red-400 flex items-center w-80 rounded-md">
                <input type="email" className="border-0 outline-0 px-2"/>
                <button className="bg-red-400 text-white font-bold w-full cursor-pointer">Ok</button>
            </div>
        </form>
    )
}

export default FormFooter