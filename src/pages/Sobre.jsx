import matriz_muicdot from '../../img/matriz-musicdot.png'
import familia_tupfeln from '../../img/familia-tupfeln.jpg'
import useNavegar from '../componentes/useNavegar'
import Figura from '../componentes/figura'
import Subtitulo from '../componentes/Subtitulo'
import Contacto from '../componentes/Contacto'
import Logo from '../componentes/Logo'
import logo from '../../img/logo.svg'

function Sobre() {

    const navegar = useNavegar()

    return (
        <div className='sm:w-100 p-4 text-justify md:w-150 m-auto'>

            <Logo src={logo}/>

            <h1 className="my-4 text-zinc-600 bg-gray-100">Sobre a Empresa</h1>

            <p className="mb-4">A MusicDot é a maior escola online de música em todo o mundo. Fundada em 1932, possui estúdios em 124 países, sendo líder de mercado com mais de 90% de participação em 118 deles.</p>

            <p className="mb-4">Nossa matriz fica em <a href="http://maps.google.com.br/?%20q=190,GabrielDequech,Mafra,SC" className="underline text-blue-700" target="_blank">Mafra, Santa Catarina.</a> De lá, saem grande parte das gravações de nossos cursos.</p>

            <Figura src={matriz_muicdot} alt="Matriz musicdot" figcaption="Matriz da MusicDot" />

            <p className="mb-4">Assine os cursos da MusicDot. Acesse <span className="underline text-blue-700" onClick={() => navegar("/")}>nosso site</span> ou entre em contato se tiver dúvidas. Conheça também <a href="#historia" className="underline text-blue-700" >nossa história</a> e nossos diferenciais.</p>

            <Subtitulo css="border-b-2" texto="História" id="historia"/>

            <Figura src={familia_tupfeln} css="md:float-right md:w-40 md:ml-6" alt="Foto da família Tupfeln" figcaption="Família Tüpfeln" />

            <p className="mb-4">A fundação em 1932 ocorreu no momento da descoberta econômica de cursos por stream online no interior de Santa Catarina. A família Tüpfeln, tradicional da região, investiu todas as suas economias nessa nova iniciativa, revolucionária para a época. A fundadora frau Dagmar Olaf Tüpfeln, dotada de particular visão administrativa, guiou os negócios da empresa durante mais de 50 anos, mutios deles ao lado de seu filho Ernst Noten Tüpfeln, atual CEO. O nome da empresa é inspirado no nome da família.</p>

            <p className="mb-4">O crescimento da empresa foi praticamente instantâneo. Nos primeiros 5 anos, já atendia 18 países. Bateu a marca de 100 países em apenas 15 anos de existência. Até hoje, já atendeu 2 bilhões de usuários diferentes, em bilhões de diferentes pedidos.</p>

            <p className="mb-4">O crescimento do número de funcionários é também assombroso. Hoje, é a maior empregadora do Brasil, mas mesmo após apenas 5 anos de sua existência, já possuía 30 mil funcionários. Fora do Brasil, há 240 mil funcionários, além dos 890 mil brasileiros nas instalações de Mafra e nos escritórios em todo o país.</p>

            <p className="mb-4">Data a importância econômica da empresa para o brasil, a família Tüpfeln já recebeu diveros prêmios, homenagens e condecorações. Todos os presidentes do Brasil já visitaram as instalações da MusicDot, além de presidentes da União Européia, Ásia e o secretário-geral da ONU.</p>

            <Subtitulo css="border-b-2" texto="Diferencial" />

            <ul className="pl-8 text-sm list-disc mb-4">
                <li>Menor preço do mercado, garantido!</li>
                <li>Se você achar um serviço mais barato, leva 1 mês de graça</li>
                <li>Pague em reais, dólares, euros, libras, dodgecoins, litecoins ou bitcoins</li>
                <li>Todas as compras acompanham acesso à Alura</li>
                <li>Maior escola de música online do mundo</li>
                <li>Atendimento via telefone, email, chat, twitter, facebook, instagram, ICQ, WhatsApp, SMS, carta, faz, sinal de fumaça e telegrama</li>
                <li>Presente em 124 países</li>
                <li>Mais de um milhão de funcionários em todo o mundo</li>
            </ul>

            <Subtitulo css="bg-gray-200 text-2xl" texto="Contato" />

            <Contacto />

            <footer className="flex gap-6 items-center">
                <Logo src={logo}/> <p className="text-sm">&copy;  Copyright Musicdot</p>
            </footer>

        </div>
    )
}

export default Sobre