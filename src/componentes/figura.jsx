

function Figura({src, alt, figcaption, css}) {
    return (
            <figure className={`bg-gray-200 text-center p-2 mb-4 mw-100 m-auto ${css}`}>
                <img src={src} alt={alt} />
                <figcaption>
                    {figcaption}
                </figcaption>
            </figure>    
    )
}

export default Figura