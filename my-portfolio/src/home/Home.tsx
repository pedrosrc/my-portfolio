import './home.css'
import {FiGithub,FiLinkedin} from 'react-icons/fi'

export default function Home() {
    return(
        <div className="container_home">
            <div className="section_name">
                <h1>Olá, eu sou</h1>
                <h1>Pedro Leonardo</h1>
                <h3>Desenvolvedor Front-End.</h3>
                <div className='icons_social'>
                    <a href="https://github.com/pedrosrc" target='_blank' className='icon_github' title='GitHub'>
                        <FiGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/pedroleodev/" target='_blank'
                    className='icon_linkedin' title='LinkedIn'>
                        <FiLinkedin/>
                    </a>
                </div>
            </div>
            <div className="section_image">
                <img src="./pedro-cartoon.png" alt="" />
            </div>

        </div>
    )
};
