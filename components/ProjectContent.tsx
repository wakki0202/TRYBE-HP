import React from "react"



type ProjectContents = {
  title: string
  subtitle: string
  issue: Text
  solution: Text
  
}



const ProjectContent: React.FC<ProjectContents> = (props: ProjectContents) => (

  <div>
    <h1 className="font-bold text-2xl py-3">{props.title}</h1>

  </div>

);


export default ProjectContent;
