import { Triangle } from 'react-loader-spinner'

import './projects.css'

export default function Projects() {
    return (
        <div className="container_projects">
            <h1>Projetos</h1>
            <div className='section_projects'>
                <div className='project'>
                    <img src="./Listas.png" alt="" />
                    <h2>Listas</h2>
                    <p>Adicione e Conclua suas Tarefas em armazenadas na nuvem.</p>
                    <span>React.Js - Firebase</span>
                    <a href="">Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Finder.png" alt="" />
                    <h2>Finder GitHub</h2>
                    <p>Visualize os répositorios dos usúarios do GitHub.</p>
                    <span>React.Js - TypeScript - Next.Js</span>
                    <a href="">Acessar</a>
                </div>
                <div className='project'>
                    <img src="./Cinewacth.png" alt="" />
                    <h2>CineWacth</h2>
                    <p>Visualize os principais filmes em cartazes nos cinemas em tempo real</p>
                    <span>React.Js - Bootstrap -  API</span>
                    <a href="">Acessar</a>
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
                    <p>Em Breve Disponível. Evolução sempre em Constânncia.</p>
                    <span>React.Js - TypeScript - TailWind - Firebase</span>
                    <a href="#">...</a>
                </div>
            </div>
        </div>
    )
}