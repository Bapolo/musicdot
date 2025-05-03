import CardCurso from "./CardCurso"
import tecladoPiano from "../../img/icone-teclado-piano.svg"
import violaoGuitarra from "../../img/icones-violao-guitarra.svg"
import baixo from "../../img/icones-baixo.svg"
import bateria from "../../img/icones-bateria.svg"
import percursao from "../../img/icones-percussao.svg"
import canto from "../../img/icones-canto.svg"
import audio from "../../img/icones-audio.svg"
import teoria from "../../img/icones-teoria.svg"
import sopro from "../../img/icones-sopro.svg"
import cordas from "../../img/icone-cordas.svg"

function GridCursos()
{
    return (
        <ul className="grid grid-cols-2 gap-2 mt-8 pb-4 px-4 md:grid-cols-5 xl:grid-cols-8 xl:grid-rows-2 xl:w-7xl xl:mx-auto" >

            <CardCurso className="" src={tecladoPiano} alt="icone teclado piano" descricao="Teclado & Piano" />

            <CardCurso className="" src={violaoGuitarra} alt="icone violão e guitarra" descricao="Violão & Guitarra" />

            <CardCurso className="" src={baixo} alt="icone Baixo" descricao="baixo" />

            <CardCurso className="md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 md:text-4xl" src={bateria} alt="icone bateria" descricao="bateria" />

            <CardCurso className="" src={percursao} alt="icone percursao" descricao="percursao" />

            <CardCurso className="xl:col-start-5 xl:col-span-2 xl:row-start-1 xl:row-span-2" src={canto} alt="icone canto" descricao="canto" />
            <CardCurso className="" src={audio} alt="icone audio" descricao="audio" />
            <CardCurso className="" src={teoria} alt="icone teoria" descricao="teoria" />
            <CardCurso className="" src={sopro} alt="icone sopro" descricao="sopro" />
            <CardCurso className="" src={cordas} alt="icone cordas" descricao="cordas" />
        </ul>
    )
}

export default GridCursos