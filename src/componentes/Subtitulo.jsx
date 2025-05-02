

function Subtitulo({css, texto, id})
{
    return(
        <h2 className={`mb-4 text-xl font-bold text-zinc-600 ${css}`} id={id}>{texto}</h2>
    )
}

export default Subtitulo