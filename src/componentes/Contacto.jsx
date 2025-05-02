

function Contacto() {
    return (
        <div className="md:flex md:gap-8">
            <div  className="mb-4 flex flex-col">
                <div className="mb-4 flex gap-2 items-center">
                    <h3 className="font-bold text-xl md:text-md">Correspondência</h3>
                    <small >todos os dias, das 09h às 18h</small>
                </div>

                <address className="mb-4 ml-4 pl-2 border-l-2 border-zinc-300">
                    <p>AOVS Sistemas de Informática S.A.</p>
                    <p>Rua Vergueiro, 3185 8º andar</p>
                    <p>Vila Mariana, São Paulo - SP</p>
                </address>
            </div>

            <div  className="mb-4 flex flex-col">
                <div className="mb-4 flex gap-2 items-center">
                    <h3 className="font-bold text-xl md:text-md">Telefones</h3>
                    <small>segunda a sexta, das 9h às 18h</small>
                </div>

                <dl className="mb-4 ml-4 pl-2 border-l-2 border-zinc-300">
                    <dt>Pessoa Física:</dt>
                    <dd className="mb-4 text-blue-500 pl-6"><a href="tel://(11) 4118-3319">(11) 4118-3319</a></dd>

                    <dt>Pessoa Jurídica:</dt>
                    <dd className="text-blue-500 pl-6"><a href="tel://(11) 4118-2172">(11) 4118-2172</a></dd>
                </dl>
            </div>

            <footer>
                
            </footer>
        </div>
    )
}

export default Contacto