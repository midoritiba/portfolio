const Card = ({id, title, technologies, description, features, demo, code, image}) => {
  return (
    <div className="card" id={id}>

    <div className="details">
      <h2>{title}</h2>
        <div className="technologies">
            {technologies.map(technology => (
                <div className="technologie-wrapper mt-3 me-3" id={technology}>
                    {technology}
                </div>
            ))}
        </div>

      <div className="project-description pt-3 pe-3">
        {description}
        <ul className='mt-2'>
            {features.map(feature => (
                <li id={`feature ${feature}`} style={{color: 'black'}}>{feature}</li>
            ))}
        </ul>
      </div>

      <div className="project-buttons mt-2">
        <a rel='noopener noreferrer' target='_blank' href={demo}>
          <div className="btn fill">
           demo
          </div>
        </a>

        <a rel='noopener noreferrer' target='_blank' href={code}>
            <div className="btn fill ms-3">
            code
            </div>
        </a>

      </div>
    </div>

    <div className="project-mockup">
    <img 
        src={process.env.PUBLIC_URL + image} 
        style={{width: '100%', objectFit: 'cover', objectPosition: 'center', borderRadius: '20px'}} 
        alt={title} />
    </div>
  </div>
  )
}

export default Card