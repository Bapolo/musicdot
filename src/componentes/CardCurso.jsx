

function CardCurso({src, alt, descricao, className})
{
    return (
        <li className={`flex flex-col gap-4 justify-center items-center border border-blue-700 p-4 rounded-xl ${className}`}>
            <img src={src} alt={alt} className="w-20"/>
            <p>{descricao}</p>
        </li>
    )
}

export default CardCurso