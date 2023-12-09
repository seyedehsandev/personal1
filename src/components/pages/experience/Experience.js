import React from 'react'
import ExpBox from './ExpBox'
import ExpSkill from './ExpSkill'
import ArrowBtn from '../ArrowBtn'


export default function Experience() {
  return (
<section id="experience" className="experience h-fit  flex flex-col items-center justify-center gap-4 ">
    <h2 className="text-base font-light text-gray-400">Explore My</h2>
    <h1 className="text-5xl font-bold">Experience</h1>
    <div className="experience-boxs mt-4 flex items-start justify-center flex-wrap gap-x-12 gap-y-9">
        <ExpBox >
            <ExpSkill title={"HTML"} level={"Experienced"}/>
            <ExpSkill title={"CSS"} level={"Experienced"}/>
            <ExpSkill title={"JavaScript"} level={"Intermediate"}/>
            <ExpSkill title={"React JS"} level={"Intermediate"}/>
            <ExpSkill title={"TypeScript"} level={"Intermediate"}/>
            <ExpSkill title={"Tailwind"} level={"Intermediate"}/>

        </ExpBox>
        <ExpBox >
            <ExpSkill title={"Git & Github"} level={"Experienced"}/>
            <ExpSkill title={"Redux"} level={"Intermediate"}/>
            <ExpSkill title={"Next JS"} level={"Familiar with"}/>
            <ExpSkill title={"SCSS "} level={"Familiar with"}/>
        </ExpBox>

    </div>
    {/* <ArrowBtn address={"#project"}/> */}

</section>
    )
}
