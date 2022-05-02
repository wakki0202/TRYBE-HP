import React from "react"

type Project = {
  title: string
  subTitle: string
  category1: string
  category2: string
}

const ProjectCard = (props: Project) => (
    
  <div>
    <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl">{props.category1}</p>
    <p className="inline text-xs bg-black text-white py-1 px-3 rounded-xl ml-2">{props.category2}</p>
    <h1 className="font-bold text-2xl py-3">{props.title}</h1>
    <h2 className="font-medium text-md">{props.subTitle}</h2>
    <p className="pt-8">and more</p>
  </div>

);


export default ProjectCard;