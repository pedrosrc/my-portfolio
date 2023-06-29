import './about.css'
import { FiDownload } from 'react-icons/fi'

export default function About() {
    return (
        <div className="container_about about">
            <h1>Sobre Mim</h1>
            <div className='section_about'>
                <div className='image_about'>
                    <img src="./pedro_about.png" alt="" />
                </div>
                <div className='text_about'>
                    <p>
                        Sou desenvolvedor front-end web e curso Análise e Desenvolvimento de Sistemas pela Estácio.  Estou sempre em busca de conhecimento para expandir meu conjunto de habilidades, seja aprendendo novas tecnologias, explorando frameworks ou bibliotecas inovadores. Também busco oportunidades na área, para me tornar um profissional cada vez mais completo e eficiente na área de desenvolvimento web.
                    </p>
                    <a href='./pedro_about.png' download='pedro_about.png'>
                        Baixar CV
                        <FiDownload />
                    </a>
                </div>


            </div>
        </div>
    )
}