import useNavegar from './useNavegar'

function Logo({src, css})
{
    const navegar = useNavegar()

    return (
        <img src={src} className={`w-25 cursor-pointer md:w-35 ${css}`} onClick={() => navegar("/")} alt="MusicDot" />
    )
}

export default Logo