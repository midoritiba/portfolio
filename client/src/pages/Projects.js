import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import Card from "../components/Card";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <section className={darkMode ? `projects bg-dark` : `projects bg-light`} id ='projects'>
      <h1 className='mt-5'>Projects</h1>

      {projectsData.map(({id, title, technologies, description, features, demo, code, image}) => (
        <Card id={id} title={title} technologies={technologies} description={description} features={features} demo={demo} code={code} image={image} />
      ))}
     </section>
  )
}

export default Projects