import Logo from "./Logo"
import logo from '../../img/logo.svg'
import facebook from '../../img/footer-icone-facebook.svg'
import youtube from '../../img/footer-icone-youtube.svg'
import instagram from '../../img/footer-icone-instagram.svg'
import Icon from "./Icon"
import Subtitulo from "./Subtitulo"
import FormFooter from "./FormFooter"


function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center text-center py-4 font-light md:grid md:grid-cols-2 md:grid-rows-2 md:items-start xl:flex xl:flex-row xl:gap-3 xl:justify-around xl:text-left">

            <div className="order-3 xl:order-1">
                <Logo src={logo} css="w-40 mb-5 mx-auto" />

                <div className="mb-5">
                    <p>AOVS Sistemas de Informática S.A.</p>
                    <p>CNPJ 05.555.382/0001-33</p>
                    <p>Rua Vergueiro - São Paulo/SP</p>
                    <p>Telefone <a href="tel://(11) 4118-3319">(11) 4118-3319</a></p>
                </div>

                <div className="flex gap-4 items-center justify-center mb-5">
                    <Icon src={facebook} alt="Icon do facebook" onClick={() => window.open("https://facebook.com", "_blank")} />

                    <Icon src={youtube} alt="Icon do youtube" onClick={() => window.open("https://youtube.com", "_blank")} />

                    <Icon src={instagram} alt="Icon do instagram" onClick={() => window.open("https://instagram.com", "_blank")} />
                </div>
            </div>

            <div className="order-1 xl:order-2">
                <Subtitulo texto="Cursos da MusicDot" css="uppercase"/>

                <ul className="mb-5">
                    <li>Cursos de Violão/Guitarra</li>
                    <li>Cursos de Teclado & Piano</li>
                    <li>Cursos de Baixo</li>
                    <li>Cursos de Bateria</li>
                    <li>Cursos de Percussão</li>
                    <li>Cursos de Canto</li>
                    <li>Cursos de Áudio</li>
                    <li>Cursos de Teoria</li>
                    <li>Cursos de Sopro</li>
                    <li>Cursos de Cordas</li>
                </ul>
            </div>

            <div className="order-2 xl:order-3">
                <Subtitulo texto="MusicDot" css="uppercase"/>
                <ul>
                    <li>Apostila</li>
                    <li>E-book</li>
                    <li>Login</li>
                    <li>Matricule-se</li>
                    <li>Perguntas frequentes</li>
                    <li>Para Escolas</li>
                    <li>Contato</li>
                </ul>
            </div>

            <FormFooter css="order-4 flex flex-col justify-center items-center"/>
        </footer>
    )
}

export default Footer