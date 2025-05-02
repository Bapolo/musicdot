import CardCurso from "./CardCurso"
import tecladoPiano from "../../img/icone-teclado-piano.svg"
import violaoGuitarra from "../../img/icones-violao-guitarra.svg"
import baixo from "../../img/icones-baixo.svg"
import bateria from "../../img/icones-bateria.svg"
import percursao from "../../img/icones-bateria.svg"
import canto from "../../img/icones-canto.svg"
import audio from "../../img/icones-audio.svg"
import teoria from "../../img/icones-teoria.svg"
import sopro from "../../img/icones-sopro.svg"
import cordas from "../../img/icone-cordas.svg"

function GridCursos()
{
    return (
        <ul className="grid grid-cols-2 gap-2 mt-8  pb-4 px-4">
            <CardCurso src={tecladoPiano} alt="icone teclado piano" descricao="Teclado & Piano" />
            <CardCurso src={violaoGuitarra} alt="icone violão e guitarra" descricao="Violão & Guitarra" />
            <CardCurso src={baixo} alt="icone Baixo" descricao="baixo" />
            <CardCurso src={bateria} alt="icone bateria" descricao="bateria" />
            <CardCurso src={percursao} alt="icone percursao" descricao="percursao" />
            <CardCurso src={canto} alt="icone canto" descricao="canto" />
            <CardCurso src={audio} alt="icone audio" descricao="audio" />
            <CardCurso src={teoria} alt="icone teoria" descricao="teoria" />
            <CardCurso src={sopro} alt="icone sopro" descricao="sopro" />
            <CardCurso src={cordas} alt="icone cordas" descricao="cordas" />
        </ul>
    )
}

export default GridCursos