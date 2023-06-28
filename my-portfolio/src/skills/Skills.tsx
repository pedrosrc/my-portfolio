import { DiBootstrap, DiCss3, DiHtml5, DiGit, DiJavascript1, DiReact,DiNodejsSmall} from "react-icons/di";
import {SiTypescript, SiNextdotjs, SiFigma, SiFirebase, SiTailwindcss, SiVite} from 'react-icons/si'
import './skills.css'

export default function Skills() {
    return (
        <div className="container_skills">
            <h1>Skills</h1>
            <div className='section_skills'>
                <div className="skill">
                    <DiHtml5 />
                    <span>HTML 5</span>
                </div>
                <div className="skill">
                    <DiCss3 />
                    <span>CSS3</span>
                </div>
                <div className="skill">
                    <DiJavascript1 />
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <DiGit />
                    <span>Git/GitHub</span>
                </div>
                <div className="skill">
                    <SiTypescript />
                    <span>TypeScript</span>
                </div>
                <div className="skill">
                    <DiReact/>
                    <span>React.Js</span>
                </div>
                <div className="skill">
                    <SiNextdotjs/>
                    <span>Next.Js</span>
                </div>
                <div className="skill">
                    <DiNodejsSmall/>
                    <span>Node.Js</span>
                </div>
                <div className="skill">
                    <SiFirebase/>
                    <span>Firebase</span>
                </div>
                <div className="skill">
                    <SiTailwindcss/>
                    <span>Tailwind Css</span>
                </div>
                <div className="skill">
                    <DiBootstrap/>
                    <span>Bootstrap</span>
                </div>
                <div className="skill">
                    <SiFigma/>
                    <span>Figma</span>
                </div>
                <div className="skill">
                    <SiVite/>
                    <span>Vite</span>
                </div>




            </div>
        </div>
    )
}