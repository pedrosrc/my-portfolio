import { DiBootstrap, DiCss3, DiHtml5, DiGit, DiJavascript1, DiReact,DiNodejsSmall} from "react-icons/di";
import {SiTypescript, SiNextdotjs, SiFigma, SiFirebase, SiTailwindcss, SiVite} from 'react-icons/si'
import './skills.css'

export default function Skills() {
    return (
        <div className="container_skills" id="skills">
            <h1>Skills</h1>
            <div className='section_skills'>
                <div className="skill">
                    <DiHtml5 color={'#F16528'} />
                    <span>HTML 5</span>
                </div>
                <div className="skill">
                    <DiCss3 color={'#379AD6'} />
                    <span>CSS3</span>
                </div>
                <div className="skill">
                    <DiJavascript1 color={'#F7E018'} />
                    <span>JavaScript</span>
                </div>
                <div className="skill">
                    <DiGit color={'#F05033'} />
                    <span>Git/GitHub</span>
                </div>
                <div className="skill">
                    <SiTypescript color={'#3178C6'}/>
                    <span>TypeScript</span>
                </div>
                <div className="skill">
                    <DiReact color={'#61DBFB'}/>
                    <span>React.Js</span>
                </div>
                <div className="skill">
                    <SiNextdotjs/>
                    <span>Next.Js</span>
                </div>
                <div className="skill">
                    <DiNodejsSmall color={'#88C043'}/>
                    <span>Node.Js</span>
                </div>
                <div className="skill">
                    <SiFirebase color={'#F2C129'}/>
                    <span>Firebase</span>
                </div>
                <div className="skill">
                    <SiTailwindcss color={'#01B7D6'}/>
                    <span>Tailwind Css</span>
                </div>
                <div className="skill">
                    <DiBootstrap color={'#563E7C'}/>
                    <span>Bootstrap</span>
                </div>
                <div className="skill">
                    <SiFigma/>
                    <span>Figma</span>
                </div>
                <div className="skill">
                    <SiVite color={'#8B73FE'}/>
                    <span>Vite</span>
                </div>




            </div>
        </div>
    )
}