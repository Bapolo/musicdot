function Icon({src, alt, onClick})
{
    return (
        <img src={src} alt={alt} onClick={onClick} className="cursor-pointer hover:scale-110 transition-all"/>
    )
}

export default Icon