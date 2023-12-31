import { Triangle } from 'react-loader-spinner'

import './projects.css'

export default function Projects() {
    return (
        <div className="container_projects" id='projects'>
            <h1>Projetos</h1>
            <div className='section_projects'>
                <div className='project'>
                    <img src="./Listas.png" alt="Smartphone and Desktop" />
                    <h2>Listas</h2>
                    <p>Adicione e Conclua suas Tarefas em armazenadas na nuvem.</p>
                    <span>React.Js - Firebase</span>
                    <a href="https://lista-tarefas-nine.vercel.app/" target='_blank'>Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Finder.png" alt="Smartphone and Desktop" />
                    <h2>Finder GitHub</h2>
                    <p>Visualize os répositorios dos usúarios do GitHub.</p>
                    <span>React.Js - TypeScript - Next.Js</span>
                    <a href="https://repos-app.vercel.app/" target='_blank'>Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Travel.png" alt="Smartphone and Desktop" />
                    <h2>Travel</h2>
                    <p>Visualize as passagens para as regiões do Brasil e outros países.</p>
                    <span>React.Js - TypeScript - Node.Js - PostgreSQL </span>
                    <a href="https://travel-viagens-nine.vercel.app/" target='_blank'>Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Bingo.png" alt="" />
                    <h2>BIngo!</h2>
                    <p>Sorteie números para completar seu bingo com seus amigos.</p>
                    <span>React.Js - TypeScript </span>
                    <a href="https://b-ingo.vercel.app/" target='_blank'>Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Auth.png" alt="Smartphone and Desktop" />
                    <h2>SystemAuth</h2>
                    <p>Visualize as passagens para as regiões do Brasil e outros países.</p>
                    <span>React.Js - TypeScript - TailWind CSS - Node.Js - MongoDB </span>
                    <a href="https://auth-project-pi.vercel.app/" target='_blank'>Acessar</a>
                </div>
                <div className='project'>
                    <Triangle
                        height="150"
                        width="150"
                        color="#4fa94d"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        visible={true}
                    />
                    <h2>Em Desenvolvimento</h2>
                    <p>Em Breve Disponível. Evolução sempre em Constância.</p>
                    <span>React.Js - TypeScript - Node.Js - PostgreSQL</span>
                    <a href="#">...</a>
                </div>
            </div>
        </div>
    )
}