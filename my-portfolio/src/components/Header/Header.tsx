import './header.css'
/*import {CiUser, CiPhone,CiGrid41,CiPalette,CiLaptop,CiMinimize2} from 'react-icons/ci'*/

const Header = () => {
    return(
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='logo_nav'>PL</a>
 
                <div className='nav_menu'>
                    <ul className='nav_list grid'>

                        <li className='nav_item'>
                            <a href="./container_about" className='nav_link'>
                                Sobre Mim
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#skills" className='nav_link'>
                               Skills
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#projects" className='nav_link'>
                                 Projetos
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="contact" className='nav_link'>
                                 Contatos
                            </a>
                        </li>
                    </ul>
    
                </div>
                
            </nav>
        </header>
    )
}

export default Header;