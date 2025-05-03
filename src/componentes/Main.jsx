import BotaoMatricule from "./BotaoMatricule"
import GridCursos from "./GridCursos"
import poster from "../../img/videos-thumbnail-video1.png"
import { BsMusicNote } from "react-icons/bs";
import background from "../../img/home-background-mobile.png"
import video from "../../video/video-promocional.mp4"

function Main() {
    return (
        <main className="text-white text-center xl:w-7xl xl:mx-auto">
            <div className="pt-8" style={{backgroundImage: `url(${background})`}}>
                <h3 className="text-2xl md:text-left md:pl-4"><span className="text-red-400">Curos online de</span> música</h3>
                <p className="p-4 md:text-left md:py-0">Comece agora e aprenda a sua primeira música em 10 minutos</p>
                <BotaoMatricule css="bg-red-400 px-4 rounded-sm text-center  list-none text-white w-50 m-auto font-bold py-4 md:hidden" />
                <GridCursos />
            </div>

            <video src={`${video}`} className="w-full" poster={poster} controls>
                Essa tag não está disponível
            </video>

            <div className="text-center m-0 bg-blue-950 p-4 text-white">
                <p className="text-2xl font-bold"><span className="text-red-400">Estude com os melhores</span> professores</p>
                <p>Aprenda no seu ritmo, sem sair de casa</p>
            </div>

            <div className="p-4 bg-zinc-200">
                <h3 className="text-blue-950 text-xl font-bold mb-5">Acesso ilimitado a todos os cursos</h3>
                <div className="flex flex-col justify-center items-center gap-4">

                    <div className="p-4 bg-red-400 font-bold w-80 rounded-xl text-2xl">
                        <BsMusicNote className="text-5xl my-5 mx-auto"/>
                        <p>Plano anual</p>
                        <h2 className="text-4xl mt-4"><span>12x</span> KZ 50,00</h2>
                        <p className="font-thin">Valor total de KZ 600,00</p>
                        <p>Acesse à alura língua</p>
                        <button className="bg-white px-4 rounded-xl text-center  list-none text-red-400 mt-3 w-50 m-auto font-bold py-4">Matricule-se</button>
                    </div>

                    <div className="p-4 bg-red-400 font-bold w-80 rounded-xl text-2xl">
                        <BsMusicNote className="text-5xl my-5 mx-auto text-blue-950"/>
                        <p>Plano anual</p>
                        <h2 className="text-4xl mt-4"><span>12x</span> KZ 50,00</h2>
                        <p className="font-thin">Valor total de KZ 600,00</p>
                        <button className="bg-white px-4 rounded-xl text-center  list-none text-red-400 mt-8 w-50 m-auto font-bold py-4">Matricule-se</button>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Main