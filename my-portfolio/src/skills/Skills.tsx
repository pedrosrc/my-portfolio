import { DiBootstrap, DiCss3, DiHtml5, DiNodejsSmall, DiStreamline, DiCodeBadge, DiGitBranch, DiCode } from "react-icons/di";
import { SiTypescript, SiNextdotjs, SiFigma, SiFirebase, SiTailwindcss, SiReact, SiJavascript,SiExpress, SiFastify, SiMysql, SiMongodb, SiPostgresql, SiGimp } from 'react-icons/si'

import './skills.css'

export default function Skills() {
    return (
        <div className="container_skills" id="skills">
            <h1>Skills</h1>
            <div className='section_skills'>
                <details className="section-tech">
                    <summary id="front"><div>Front-End <DiCode/></div></summary>
                    <ul>
                        <li><DiHtml5/>|<DiCss3/>HTML-CSS</li>
                        <li><SiJavascript/>JavaScript</li>
                        <li><SiTypescript />TypeScript</li>
                        <li><SiReact /> React.Js</li>
                        <li><SiNextdotjs />Next.Js</li>
                        <li><SiTailwindcss /> TailWind CSS</li>
                        <li><DiBootstrap/>Boostrap</li>
                    </ul>
                </details>
                <details className="section-tech">
                    <summary id="back"><div>Back-End <DiGitBranch/></div></summary>
                    <ul>
                        <li><SiJavascript/>JavaScript</li>
                        <li><SiTypescript />TypeScript</li>
                        <li><DiNodejsSmall/>Node.Js</li>
                        <li><SiExpress/>Express</li>
                        <li><SiFastify/> Fastify </li>
                    </ul>
                </details>
                <details className="section-tech">
                    <summary id="data"><div>Banco de Dados <DiStreamline/> </div></summary>
                    <ul>
                        <li><SiMysql/>MySQL</li>
                        <li><SiMongodb />MongoDB</li>
                        <li><SiPostgresql/>PostgreSQL</li>
                        <li><SiFirebase/>Cloud Firestore (Firebase)</li>
                       
                    </ul>
                </details>
                <details className="section-tech">
                    <summary id="design"><div>Design <DiCodeBadge/> </div></summary>
                    <ul>
                        <li><SiFigma />Figma</li>
                        <li><SiGimp /> Gimp </li>
                    </ul>
                </details>

            </div>
        </div>
    )
}