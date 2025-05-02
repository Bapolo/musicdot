import BotaoMatricule from "./BotaoMatricule"
import GridCursos from "./GridCursos"
import poster from "../../img/videos-thumbnail-video1.png"

function Main() {
    return (
        <main className="text-white text-center">
            <div className="bg-[url(../../img/home-background-mobile.png)] pt-8">
                <h3 className="text-2xl"><span className="text-red-400">Curos online de</span> música</h3>
                <p className="p-4">Comece agora e aprenda a sua primeira música em 10 minutos</p>
                <BotaoMatricule css="bg-red-400 px-4 rounded-sm text-center  list-none text-white w-50 m-auto font-bold py-4" />
                <GridCursos />
            </div>

            <video src="../../video/video-promocional.mp4" poster={poster} controls>
                Essa tag não está disponível
            </video>

            <div className="text-center mb-4 bg-blue-950 p-4 text-white">
                <p className="text-2xl font-bold"><span className="text-red-400">Estude com os melhores</span> professores</p>
                <p>Aprenda no seu ritmo, sem sair de casa</p>
            </div>

        </main>
    )
}

export default Main