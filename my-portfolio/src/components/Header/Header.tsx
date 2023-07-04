import './header.css'
import { useState } from 'react'
import {CiUser, CiPhone,CiGrid41,CiPalette,CiLaptop,CiMinimize2} from 'react-icons/ci'

const Header = () => {

    const [toogle, setToogle] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)

    function Menu(){
        setShowMenu(true)
        setToogle(true)
    }
    function MenuClose(){
        !showMenu
        setToogle(false)
        setShowMenu(false)
    }

    return(
        <header className='header'>
            <nav className='nav container'>
                <a href="#home" className='logo_nav'>PL</a>
 
                <div className={toogle ? 'nav_menu show-menu' : 'nav_menu'}>
                    <ul className='nav_list grid'>

                        <li className='nav_item'>
                            <a href="#about" className='nav_link'>
                                <CiUser className='nav_icon'/>
                                Sobre Mim
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#skills" className='nav_link'>
                                <CiLaptop className='nav_icon'/>
                               Skills
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#projects" className='nav_link'>
                                <CiPalette className='nav_icon'/>
                                 Projetos
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href="#contacts" className='nav_link'>
                                <CiPhone className='nav_icon'/>
                                 Contatos
                            </a>
                        </li>
                    </ul>
                    <CiMinimize2 className='nav_close' onClick={MenuClose}/>
                </div>
                <div className='nav_toggle' onClick={Menu}>
                    <CiGrid41/>
                </div>
            </nav>
        </header>
    )
}

export default Header;