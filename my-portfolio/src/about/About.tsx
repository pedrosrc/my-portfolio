import { useState } from 'react'
import './about.css'
import { FiDownload } from 'react-icons/fi'
import {FcDocument} from 'react-icons/fc'

export default function About() {

    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div className="container_about about" id='about'>
            <h1>Sobre Mim</h1>
            <div className='section_about'>
                <div className='image_about'>
                    <img src="./about.png" alt="cartoon de garoto em laptop" />
                </div>
                <div className='text_about'>
                    <p>
                        Sou desenvolvedor web com foco em front-end e curso Análise e Desenvolvimento de Sistemas pela Estácio.  Estou sempre em busca de conhecimento para expandir meu conjunto de habilidades, e com ambição em se tornar full-stack, seja aprendendo novas tecnologias, explorando frameworks ou bibliotecas inovadores. Também busco oportunidades na área, para me tornar um profissional cada vez mais completo e eficiente na área de desenvolvimento web.
                    </p>
                    <button onClick={toggleOptions} className='cv_download'>
                        Baixar CV
                        <FiDownload />
                    </button>
                    {showOptions && (
                        <div className='buttons_cv'>
                            <a href="./Curriculo-Pedro-Leonardo.pdf" download='Curriculo-Pedro-Leonardo.pdf'> <FcDocument/> CV - Português</a>
                            <a href="./Cv-PedroLeonardo-EN.pdf" download='Cv-PedroLeonardo-EN.pdf'> <FcDocument/> CV - English</a>
                        </div>
                    )}
                </div>


            </div>
        </div>
    )
}