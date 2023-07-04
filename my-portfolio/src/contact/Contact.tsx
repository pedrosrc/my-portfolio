import { MdLocationPin, MdWhatsapp, MdEmail } from 'react-icons/md'
import './contact.css'

export default function Contact() {
    return (
        <div className='container_contact' id='contacts'>
            <h1>Contatos</h1>
            <div className='section_contact'>
                <div className='contact'>
                    <ul>
                        <h2>Fale Comigo !</h2>
                        <li>
                            <MdLocationPin color={'#05731B'} />
                            <span>Fortaleza - CE - Brasil</span>
                        </li>
                        <li>
                            <MdWhatsapp color={'#05731B'} />
                            <span> <a href="https://wa.me/5585999244215" target='_blank'>+55 (85) 99924-4215</a></span>
                        </li>
                        <li>
                            <MdEmail color={'#05731B'} />
                            <span>pedroleon.pc@outlook.com</span>
                        </li>
                    </ul>
                    <img src='./pedro-cartoon.png' alt='Cartton'/>
                </div>

            </div>
        </div>
    )
}